import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrqy-392k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yrqy-392k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:acid-rain-48"} {...others} />);
}

export default Component;
