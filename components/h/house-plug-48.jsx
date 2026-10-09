import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9czz4bal.css';
import '../../css/l/laagh_b7q.css';
import '../../css/q/q1ee2b8fe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d9czz4bal"/><path class="laagh_b7q"/><path class="q1ee2b8fe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-plug-48"} {...others} />);
}

export default Component;
