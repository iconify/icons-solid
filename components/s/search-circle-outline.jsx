import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr_xxwbkp.css';
import '../../css/j/jyvikwbnh.css';
import '../../css/w/w3xf5cbjl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lr_xxwbkp"/><path class="jyvikwbnh"/><path class="w3xf5cbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:search-circle-outline"} {...others} />);
}

export default Component;
