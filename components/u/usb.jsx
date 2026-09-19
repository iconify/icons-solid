import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aim5hzbvg.css';
import '../../css/e/e4iey6k0o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aim5hzbvg"/><path class="e4iey6k0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:usb"} {...others} />);
}

export default Component;
