import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3u8slx_m.css';
import '../../css/f/f7t-e2bsi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j3u8slx_m"/><path class="f7t-e2bsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:flow-stream-reference"} {...others} />);
}

export default Component;
