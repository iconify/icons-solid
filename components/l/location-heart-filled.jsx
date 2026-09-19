import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqhp6dbju.css';
import '../../css/p/pzbcwvb7c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kqhp6dbju"/><path class="pzbcwvb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location-heart-filled"} {...others} />);
}

export default Component;
