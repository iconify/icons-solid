import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivbs_oy6v.css';
import '../../css/g/ghclb9bto.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ivbs_oy6v"/><path class="ghclb9bto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sanity"} {...others} />);
}

export default Component;
