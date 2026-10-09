import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdw3vx8xp.css';
import '../../css/j/j-4k2f7vu.css';
import '../../css/w/w3544mb8m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fdw3vx8xp"/><path class="j-4k2f7vu"/><path class="w3544mb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:esg-20-bold"} {...others} />);
}

export default Component;
