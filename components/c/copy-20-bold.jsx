import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd5atu08j.css';
import '../../css/v/veyzdwbvj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cd5atu08j"/><path class="veyzdwbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:copy-20-bold"} {...others} />);
}

export default Component;
