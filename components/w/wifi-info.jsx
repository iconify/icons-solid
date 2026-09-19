import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd1j9ig9o.css';

const viewBox = {"width":512,"height":408};
const content = `<path class="jd1j9ig9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:wifi-info"} {...others} />);
}

export default Component;
