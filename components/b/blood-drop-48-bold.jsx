import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4ifueief.css';
import '../../css/v/v2yg3bceh.css';
import '../../css/w/w762ysbrb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s4ifueief"/><path class="v2yg3bceh"/><path class="w762ysbrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blood-drop-48-bold"} {...others} />);
}

export default Component;
