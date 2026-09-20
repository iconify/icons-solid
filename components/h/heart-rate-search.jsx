import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkamgcw4g.css';
import '../../css/z/zqjjo1bmk.css';
import '../../css/v/vdzzd91wl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hkamgcw4g"/><path class="zqjjo1bmk"/><path class="vdzzd91wl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:heart-rate-search"} {...others} />);
}

export default Component;
