import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw1s4i0cl.css';

const viewBox = {"width":794,"height":775};
const content = `<path class="fw1s4i0cl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:o-upper-case"} {...others} />);
}

export default Component;
