import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uaivxvbum.css';
import '../../css/g/g6wemnuvr.css';
import '../../css/y/yziy07b-n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="uaivxvbum"/><path class="g6wemnuvr"/><path class="yziy07b-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-supervillain"} {...others} />);
}

export default Component;
