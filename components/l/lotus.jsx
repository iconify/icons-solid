import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qzh-o1jaa.css';
import '../../css/q/q_w-6ubgj.css';
import '../../css/j/j2lbs9bwb.css';
import '../../css/j/jmyjil-9j.css';
import '../../css/h/hloc2bbpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qzh-o1jaa wm-shadow"/><path class="q_w-6ubgj"/><path class="j2lbs9bwb"/><path class="jmyjil-9j"/><path class="hloc2bbpw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:lotus"} {...others} />);
}

export default Component;
