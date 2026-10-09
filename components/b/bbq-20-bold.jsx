import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcx_6xb7j.css';
import '../../css/w/wzhdi44yk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lcx_6xb7j"/><path class="wzhdi44yk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bbq-20-bold"} {...others} />);
}

export default Component;
