import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tderinysh.css';
import '../../css/v/ve1blyb1e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tderinysh"/><path class="ve1blyb1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kettle-48"} {...others} />);
}

export default Component;
