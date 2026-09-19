import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihyhuvqln.css';
import '../../css/s/squpyke4y.css';
import '../../css/e/enxx11bvx.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ihyhuvqln"/><path class="squpyke4y"/><path class="enxx11bvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:chrome-filled"} {...others} />);
}

export default Component;
