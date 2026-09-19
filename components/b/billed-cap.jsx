import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9gp5lbxe.css';
import '../../css/u/u_85dibrn.css';
import '../../css/f/fhnpiywoi.css';
import '../../css/e/e5wvorq1u.css';
import '../../css/a/aqwmdacie.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><ellipse transform="rotate(-57.793 22.42 7.685)" class="m9gp5lbxe"/><path clip-rule="evenodd" class="u_85dibrn"/><path class="fhnpiywoi"/><path class="e5wvorq1u"/><path class="aqwmdacie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:billed-cap"} {...others} />);
}

export default Component;
