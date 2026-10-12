import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij6cj4rwy.css';
import '../../css/i/iqxu07b4z.css';
import '../../css/u/uz1rh-b9a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ij6cj4rwy"/><path class="iqxu07b4z"/><path class="uz1rh-b9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stopwatch-48-bold"} {...others} />);
}

export default Component;
