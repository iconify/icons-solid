import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wv9mw16ld.css';

const viewBox = {"width":432,"height":480};
const content = `<path class="wv9mw16ld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:smartphone-ring"} {...others} />);
}

export default Component;
