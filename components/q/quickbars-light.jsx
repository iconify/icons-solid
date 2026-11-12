import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df8texbdg.css';
import '../../css/q/q0j4_mbjy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="df8texbdg"/><path class="q0j4_mbjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quickbars-light"} {...others} />);
}

export default Component;
