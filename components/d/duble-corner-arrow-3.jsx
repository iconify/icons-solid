import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahy-3rbsy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ahy-3rbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:duble-corner-arrow-3"} {...others} />);
}

export default Component;
