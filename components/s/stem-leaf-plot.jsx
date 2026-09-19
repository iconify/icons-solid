import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr1sr0b5q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cr1sr0b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:stem-leaf-plot"} {...others} />);
}

export default Component;
