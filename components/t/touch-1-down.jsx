import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2l7ej-yh.css';
import '../../css/x/xtkb6fvqt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f2l7ej-yh"/><path class="xtkb6fvqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:touch-1-down"} {...others} />);
}

export default Component;
