import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0j9h1vcp.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="h0j9h1vcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:ko-ko-kata-box"} {...others} />);
}

export default Component;
