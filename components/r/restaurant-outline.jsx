import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2do7bc4s.css';
import '../../css/o/o9o6s77ky.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w2do7bc4s"/><path class="o9o6s77ky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:restaurant-outline"} {...others} />);
}

export default Component;
