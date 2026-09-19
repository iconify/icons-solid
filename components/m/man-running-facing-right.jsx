import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pfamdko6h.css';
import '../../css/a/a4dm_jfat.css';
import '../../css/j/jpriswb3i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="pfamdko6h"/><path class="a4dm_jfat"/><path class="jpriswb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-running-facing-right"} {...others} />);
}

export default Component;
