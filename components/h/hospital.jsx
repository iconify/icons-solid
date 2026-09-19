import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kt_m-joux.css';
import '../../css/m/mh7ucwbev.css';
import '../../css/q/ql6hqqjvi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="kt_m-joux"/><path class="mh7ucwbev"/><path class="ql6hqqjvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hospital"} {...others} />);
}

export default Component;
