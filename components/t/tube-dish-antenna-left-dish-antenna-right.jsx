import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v97ouibln.css';
import '../../css/z/zisei9b2e.css';
import '../../css/w/wmejmsbwo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v97ouibln"/><path class="zisei9b2e"/><path class="wmejmsbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:tube-dish-antenna-left-dish-antenna-right"} {...others} />);
}

export default Component;
