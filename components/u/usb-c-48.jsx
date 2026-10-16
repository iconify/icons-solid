import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qifb4r4in.css';
import '../../css/w/wtve9fz8c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qifb4r4in"/><path class="wtve9fz8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:usb-c-48"} {...others} />);
}

export default Component;
