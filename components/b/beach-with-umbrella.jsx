import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xilpkgb-k.css';
import '../../css/i/ian6bfbdt.css';
import '../../css/t/t-jez5b4a.css';
import '../../css/v/vs5vt__md.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/ljehdzx8g.css';
import '../../css/c/cnfbru-tz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xilpkgb-k"/><path class="ian6bfbdt"/><path class="t-jez5b4a"/><path class="vs5vt__md"/><g class="ij2x_72vy"><path class="ljehdzx8g"/><path class="cnfbru-tz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:beach-with-umbrella"} {...others} />);
}

export default Component;
