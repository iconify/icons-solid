import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zigegl92v.css';
import '../../css/s/sgc0k4bzn.css';
import '../../css/s/sb92zfh1v.css';
import '../../css/i/io01yrznx.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="zigegl92v"/><path class="sgc0k4bzn"/><path class="sb92zfh1v"/><path class="io01yrznx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:st"} {...others} />);
}

export default Component;
