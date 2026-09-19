import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivkxfbb3l.css';
import '../../css/q/qmvfbubxl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ivkxfbb3l"/><path class="qmvfbubxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:zoom-out-area"} {...others} />);
}

export default Component;
