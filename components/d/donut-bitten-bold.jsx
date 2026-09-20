import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vgyk2gmja.css';
import '../../css/f/fs4o0rlgx.css';
import '../../css/n/nc-hrj18w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vgyk2gmja"/><path class="fs4o0rlgx"/><path clip-rule="evenodd" class="nc-hrj18w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:donut-bitten-bold"} {...others} />);
}

export default Component;
