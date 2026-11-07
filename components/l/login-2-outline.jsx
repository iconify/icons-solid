import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olusrszwm.css';
import '../../css/j/j-an33b3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="olusrszwm"/><path class="j-an33b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:login-2-outline"} {...others} />);
}

export default Component;
