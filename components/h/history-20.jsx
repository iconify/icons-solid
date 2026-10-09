import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thr7ovb8q.css';
import '../../css/o/ogpkn9bgh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="thr7ovb8q"/><path class="ogpkn9bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:history-20"} {...others} />);
}

export default Component;
