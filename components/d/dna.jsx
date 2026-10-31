import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ee19jwath.css';
import '../../css/w/w6p_0sbns.css';
import '../../css/e/ehmiambcj.css';
import '../../css/i/ihjz0kquw.css';
import '../../css/u/uwyza1bvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ee19jwath wm-shadow"/><path class="w6p_0sbns"/><path class="ehmiambcj"/><path class="ihjz0kquw"/><path class="uwyza1bvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:dna"} {...others} />);
}

export default Component;
