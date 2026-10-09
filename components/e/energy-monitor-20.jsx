import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5nifvbes.css';
import '../../css/w/wewzkacif.css';
import '../../css/p/ptha_9bng.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z5nifvbes"/><path class="wewzkacif"/><path class="ptha_9bng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-monitor-20"} {...others} />);
}

export default Component;
