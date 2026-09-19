import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgk3i7bfw.css';
import '../../css/g/g5jh10vug.css';
import '../../css/k/ko92zebxf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sgk3i7bfw"/><path class="g5jh10vug"/><path class="ko92zebxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ear-outline"} {...others} />);
}

export default Component;
