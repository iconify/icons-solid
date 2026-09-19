import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jsl22jwga.css';
import '../../css/z/zo0rqpb0w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="jsl22jwga"/><path class="zo0rqpb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-superhero"} {...others} />);
}

export default Component;
