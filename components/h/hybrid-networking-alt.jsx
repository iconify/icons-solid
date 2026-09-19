import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8406y-qd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f8406y-qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:hybrid-networking-alt"} {...others} />);
}

export default Component;
