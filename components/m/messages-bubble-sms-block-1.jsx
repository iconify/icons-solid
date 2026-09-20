import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stj45pbga.css';
import '../../css/l/l3dtshbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="stj45pbga"/><path class="l3dtshbev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:messages-bubble-sms-block-1"} {...others} />);
}

export default Component;
