import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/imx161iql.css';
import '../../css/a/a1-a0knoo.css';
import '../../css/f/fumgbtb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="imx161iql"/><path class="a1-a0knoo"/><path class="fumgbtb-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calculator-sparkles-two-tone"} {...others} />);
}

export default Component;
