import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp9z2uxhq.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="rp9z2uxhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:digital0"} {...others} />);
}

export default Component;
