import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqndebbwd.css';
import '../../css/d/d3236htcp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uqndebbwd"/><path class="d3236htcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bonfire-sharp"} {...others} />);
}

export default Component;
