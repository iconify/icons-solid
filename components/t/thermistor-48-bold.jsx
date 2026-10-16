import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yb-7heutx.css';
import '../../css/b/bgfe5mgwh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yb-7heutx"/><path class="bgfe5mgwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermistor-48-bold"} {...others} />);
}

export default Component;
