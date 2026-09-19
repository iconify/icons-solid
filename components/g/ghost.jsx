import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/opab-pw4s.css';
import '../../css/h/hfrj-hbym.css';
import '../../css/l/lln7y71yy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="opab-pw4s"/><path class="hfrj-hbym"/><path class="lln7y71yy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:ghost"} {...others} />);
}

export default Component;
