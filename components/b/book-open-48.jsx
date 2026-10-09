import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we15u_h7x.css';
import '../../css/q/qg66_ubxr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="we15u_h7x"/><path class="qg66_ubxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:book-open-48"} {...others} />);
}

export default Component;
