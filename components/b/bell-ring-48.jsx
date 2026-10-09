import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4vq0qbju.css';
import '../../css/y/yxy7ambyf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k4vq0qbju"/><path class="yxy7ambyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-ring-48"} {...others} />);
}

export default Component;
