import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hu6to_bep.css';
import '../../css/r/ruu0kd3pu.css';
import '../../css/t/tlj01bb8r.css';
import '../../css/e/eic0jabeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hu6to_bep"/><path clip-rule="evenodd" class="ruu0kd3pu"/><path class="tlj01bb8r"/><path class="eic0jabeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-slider-bold"} {...others} />);
}

export default Component;
