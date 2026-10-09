import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv842m9yr.css';
import '../../css/z/z8b5h_-hd.css';
import '../../css/i/i42_48y_v.css';
import '../../css/n/n6r65nvvk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yv842m9yr"/><path class="z8b5h_-hd"/><path class="i42_48y_v"/><path class="n6r65nvvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lever-20-bold"} {...others} />);
}

export default Component;
