import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3s0qsbvb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e3s0qsbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:crop-growth"} {...others} />);
}

export default Component;
