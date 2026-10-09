import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waw60ab1f.css';
import '../../css/c/cd-eh4cev.css';
import '../../css/b/b50gwx6hj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="waw60ab1f"/><path class="cd-eh4cev"/><path class="b50gwx6hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-exchanger-48"} {...others} />);
}

export default Component;
