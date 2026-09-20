import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0kp9n0nz.css';
import '../../css/g/gx0kfqf0b.css';
import '../../css/m/mgh8_7lbe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="s0kp9n0nz"/><path clip-rule="evenodd" class="gx0kfqf0b"/><path class="mgh8_7lbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:heater-flat"} {...others} />);
}

export default Component;
