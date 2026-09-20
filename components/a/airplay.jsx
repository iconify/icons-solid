import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/y/yb6xombiz.css';
import '../../css/c/cv7nxjb3u.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="yb6xombiz"/><path class="cv7nxjb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:airplay"} {...others} />);
}

export default Component;
