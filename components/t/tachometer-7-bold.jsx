import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_rh0mbxd.css';
import '../../css/p/ps_upsbky.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="t_rh0mbxd"/><path clip-rule="evenodd" class="ps_upsbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-7-bold"} {...others} />);
}

export default Component;
