import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wv6l1kbkq.css';
import '../../css/z/znf0au9uo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wv6l1kbkq"/><path class="znf0au9uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soda-can-20-bold"} {...others} />);
}

export default Component;
