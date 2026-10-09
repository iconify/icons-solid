import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytd4rwhme.css';
import '../../css/a/a3u4_xbni.css';
import '../../css/e/ectk0ob8n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ytd4rwhme"/><path class="a3u4_xbni"/><path class="ectk0ob8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gamepad-48-bold"} {...others} />);
}

export default Component;
