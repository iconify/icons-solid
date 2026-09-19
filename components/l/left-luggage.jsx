import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/do-sjpbog.css';
import '../../css/j/jlj1570im.css';
import '../../css/u/uru88vgdy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="do-sjpbog"/><path class="jlj1570im"/><path class="uru88vgdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:left-luggage"} {...others} />);
}

export default Component;
