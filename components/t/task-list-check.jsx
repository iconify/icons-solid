import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mfz8_jbee.css';
import '../../css/d/dkkvodt2e.css';
import '../../css/k/koqj28bzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mfz8_jbee"/><path class="dkkvodt2e"/><path class="koqj28bzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:task-list-check"} {...others} />);
}

export default Component;
