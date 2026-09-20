import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilj8trt6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilj8trt6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:corner-down-left-line"} {...others} />);
}

export default Component;
