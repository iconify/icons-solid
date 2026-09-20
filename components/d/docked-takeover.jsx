import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm5wywbws.css';
import '../../css/e/ehbxsvcgi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wm5wywbws"/><path class="ehbxsvcgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:docked-takeover"} {...others} />);
}

export default Component;
