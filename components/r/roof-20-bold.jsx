import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmcqeehhi.css';
import '../../css/y/y8kfksbep.css';
import '../../css/j/jr6n55b6j.css';
import '../../css/o/ot0zf9b5v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fmcqeehhi"/><path class="y8kfksbep"/><path class="jr6n55b6j"/><path class="ot0zf9b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:roof-20-bold"} {...others} />);
}

export default Component;
