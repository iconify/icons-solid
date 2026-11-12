import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc588xphk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oc588xphk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linuxgsm-dark"} {...others} />);
}

export default Component;
