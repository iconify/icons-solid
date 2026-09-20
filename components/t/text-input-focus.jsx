import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ajpk_ybdp.css';
import '../../css/h/hcy456k9u.css';
import '../../css/s/saia9hbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ajpk_ybdp"/><path class="hcy456k9u"/><path class="saia9hbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:text-input-focus"} {...others} />);
}

export default Component;
