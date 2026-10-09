import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk1jq-b8e.css';
import '../../css/x/x4l5l87lu.css';
import '../../css/c/crda83b7k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yk1jq-b8e"/><path class="x4l5l87lu"/><path class="crda83b7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:goal-48-bold"} {...others} />);
}

export default Component;
