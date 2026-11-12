import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jiw71x5na.css';
import '../../css/d/dvmj74bcp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jiw71x5na"/><path class="dvmj74bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dependabot"} {...others} />);
}

export default Component;
