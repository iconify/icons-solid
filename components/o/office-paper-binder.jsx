import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dpf22ybrv.css';
import '../../css/m/mjbq1q3lt.css';
import '../../css/n/nxp5z5bgo.css';
import '../../css/y/y5i2yrbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dpf22ybrv"/><path class="mjbq1q3lt"/><path class="nxp5z5bgo"/><path class="y5i2yrbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:office-paper-binder"} {...others} />);
}

export default Component;
