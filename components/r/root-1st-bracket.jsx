import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s9fynmwrw.css';
import '../../css/z/ztw77h30a.css';
import '../../css/w/ws3epobig.css';
import '../../css/d/dpiq2xgfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s9fynmwrw"/><path class="ztw77h30a"/><path class="ws3epobig"/><path class="dpiq2xgfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:root-1st-bracket"} {...others} />);
}

export default Component;
