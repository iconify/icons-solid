import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qox-itb7z.css';
import '../../css/y/yh9fei7of.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qox-itb7z"/><path class="yh9fei7of"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:binder-20-bold"} {...others} />);
}

export default Component;
