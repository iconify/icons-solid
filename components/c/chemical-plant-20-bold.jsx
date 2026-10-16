import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzc1gb6wy.css';
import '../../css/q/qvjlz2b3k.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dzc1gb6wy"/><path class="qvjlz2b3k"/><path class="yfoxxnbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chemical-plant-20-bold"} {...others} />);
}

export default Component;
