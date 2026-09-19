import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdokhcczj.css';
import '../../css/o/ohy4x1bfs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pdokhcczj"/><path class="ohy4x1bfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-pie"} {...others} />);
}

export default Component;
