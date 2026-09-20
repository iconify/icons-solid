import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm5wywbws.css';
import '../../css/l/l8j0hkazm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wm5wywbws"/><path class="l8j0hkazm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:docked-right"} {...others} />);
}

export default Component;
