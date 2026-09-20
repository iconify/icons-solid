import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/u/uh31r0biy.css';
import '../../css/d/d471ab08e.css';

const viewBox = {"width":41,"height":41,"top":-0.5};
const content = `<g class="umm606kxf"><path class="uh31r0biy"/><path class="d471ab08e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:star"} {...others} />);
}

export default Component;
