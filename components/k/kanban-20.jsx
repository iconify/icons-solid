import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf2m3cbtu.css';
import '../../css/q/q36jvnbvp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yf2m3cbtu"/><path class="q36jvnbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kanban-20"} {...others} />);
}

export default Component;
