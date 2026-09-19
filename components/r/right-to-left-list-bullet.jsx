import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fe547d_ye.css';
import '../../css/u/upqim93zu.css';
import '../../css/g/gczf1zbun.css';
import '../../css/h/hvvoj_b-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fe547d_ye"/><path class="upqim93zu"/><path class="gczf1zbun"/><path class="hvvoj_b-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:right-to-left-list-bullet"} {...others} />);
}

export default Component;
