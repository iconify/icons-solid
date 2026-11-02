import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9cj9y50u.css';
import '../../css/o/oy6hf0bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o9cj9y50u"/><path class="oy6hf0bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:loading-3-line"} {...others} />);
}

export default Component;
