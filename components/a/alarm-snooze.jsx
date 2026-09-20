import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/se86zivnm.css';
import '../../css/m/m6mstacay.css';
import '../../css/a/aqaeenr8b.css';
import '../../css/g/gla_ixo6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="se86zivnm"/><path class="m6mstacay"/><path class="aqaeenr8b"/><path class="gla_ixo6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:alarm-snooze"} {...others} />);
}

export default Component;
