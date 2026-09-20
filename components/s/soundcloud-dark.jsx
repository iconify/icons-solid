import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9l9obcqk.css';

const viewBox = {"width":75,"height":33.51};
const content = `<path class="s9l9obcqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:soundcloud-dark"} {...others} />);
}

export default Component;
