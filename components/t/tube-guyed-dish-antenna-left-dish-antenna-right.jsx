import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5d2v1bhr.css';
import '../../css/z/zisei9b2e.css';
import '../../css/w/wmejmsbwo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v5d2v1bhr"/><path class="zisei9b2e"/><path class="wmejmsbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:tube-guyed-dish-antenna-left-dish-antenna-right"} {...others} />);
}

export default Component;
