import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp-8xbcar.css';
import '../../css/g/gkoq5rb_y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mp-8xbcar"/><path class="gkoq5rb_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-inverter-48"} {...others} />);
}

export default Component;
