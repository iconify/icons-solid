import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccei6lb9f.css';
import '../../css/e/epp456p3z.css';
import '../../css/f/fa11zbbim.css';
import '../../css/q/qvxafqafo.css';
import '../../css/z/z04drlb1l.css';
import '../../css/y/yoayr-pvk.css';
import '../../css/i/ilp8ksnvf.css';
import '../../css/h/h46sh9bje.css';
import '../../css/r/rnypvj2_z.css';
import '../../css/o/owqt9kbqb.css';
import '../../css/a/ard_nubkv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ccei6lb9f"/><path class="epp456p3z"/><path class="fa11zbbim"/><path class="qvxafqafo"/><g class="z04drlb1l"><path class="yoayr-pvk"/><path class="ilp8ksnvf"/><path class="h46sh9bje"/><path class="rnypvj2_z"/><path class="owqt9kbqb"/><path class="ard_nubkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-sneezing-into-elbow"} {...others} />);
}

export default Component;
