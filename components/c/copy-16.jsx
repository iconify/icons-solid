import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3frkwgdc.css';
import '../../css/i/irv6a3b8z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y3frkwgdc"/><path class="irv6a3b8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:copy-16"} {...others} />);
}

export default Component;
