import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/chq_gg-et.css';
import '../../css/z/z1dmdebaj.css';
import '../../css/b/bykglcbce.css';
import '../../css/w/wdxpo1vxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="chq_gg-et"/><path class="wm-a z1dmdebaj"/><path class="bykglcbce"/><path class="wdxpo1vxi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:api-duo"} {...others} />);
}

export default Component;
