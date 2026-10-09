import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg0icab7b.css';
import '../../css/y/ybggmtbqm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qg0icab7b"/><path class="ybggmtbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:apple-20-bold"} {...others} />);
}

export default Component;
