import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xz2d1xbtd.css';
import '../../css/o/oy3llbbra.css';
import '../../css/z/zaf1byp1g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="xz2d1xbtd"/><path class="oy3llbbra"/><path class="zaf1byp1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:angry-face-with-horns"} {...others} />);
}

export default Component;
