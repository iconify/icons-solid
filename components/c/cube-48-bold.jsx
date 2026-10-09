import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfp9hxg1b.css';
import '../../css/x/xkv-lbb5k.css';
import '../../css/f/fdklark9r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sfp9hxg1b"/><path class="xkv-lbb5k"/><path class="fdklark9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cube-48-bold"} {...others} />);
}

export default Component;
