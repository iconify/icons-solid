import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwk21ob-f.css';
import '../../css/w/wp_6hx3_h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mwk21ob-f"/><path class="wp_6hx3_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:notifications-off-outline"} {...others} />);
}

export default Component;
