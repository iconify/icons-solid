import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj674sbcw.css';
import '../../css/y/y2i-3gmxt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wj674sbcw"/><path class="y2i-3gmxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:technology-robot-ai"} {...others} />);
}

export default Component;
