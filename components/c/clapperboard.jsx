import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sy3i85blh.css';
import '../../css/a/asa8z35su.css';
import '../../css/k/kpbt8hbco.css';
import '../../css/c/c480uaccw.css';
import '../../css/l/l0d0_pkmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sy3i85blh wm-shadow"/><path class="asa8z35su wm-shadow"/><path class="kpbt8hbco"/><path class="c480uaccw"/><path class="l0d0_pkmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:clapperboard"} {...others} />);
}

export default Component;
