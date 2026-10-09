import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewqmb9jcq.css';
import '../../css/g/gykt9mb8o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ewqmb9jcq"/><path class="gykt9mb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotor-20-bold"} {...others} />);
}

export default Component;
