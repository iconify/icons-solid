import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf9u9jrxa.css';
import '../../css/u/uz2w82b1t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kf9u9jrxa"/><path class="uz2w82b1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:task-add"} {...others} />);
}

export default Component;
