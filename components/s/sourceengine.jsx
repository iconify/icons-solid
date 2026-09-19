import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izdfergmo.css';
import '../../css/v/vwvszy4rp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="izdfergmo"/><path class="vwvszy4rp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sourceengine"} {...others} />);
}

export default Component;
