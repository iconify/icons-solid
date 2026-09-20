import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/sgi4xs3_p.css';
import '../../css/d/d3n761bnq.css';
import '../../css/j/joq9pbbzu.css';
import '../../css/v/vzm4uibjf.css';
import '../../css/p/pm8egwbwr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="sgi4xs3_p"/><path class="d3n761bnq"/><path class="joq9pbbzu"/><path class="vzm4uibjf"/><path class="pm8egwbwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:notification-alarm-snooze"} {...others} />);
}

export default Component;
