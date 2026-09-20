import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywl-3ftmc.css';
import '../../css/d/dpuh-7mvn.css';
import '../../css/l/lt2ucxr_a.css';
import '../../css/u/u5ivydbmj.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/h/han-2acmn.css';
import '../../css/c/ctl6dbbkh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ywl-3ftmc"/><path class="dpuh-7mvn"/><path class="lt2ucxr_a"/><path class="u5ivydbmj"/><g class="ij2x_72vy"><path class="han-2acmn"/><path class="ctl6dbbkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ledger"} {...others} />);
}

export default Component;
