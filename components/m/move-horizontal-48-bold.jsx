import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz8zsd5cc.css';
import '../../css/w/wived3hxr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wz8zsd5cc"/><path class="wived3hxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-horizontal-48-bold"} {...others} />);
}

export default Component;
