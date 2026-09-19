import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsfzcsbqb.css';
import '../../css/r/ri140fi6g.css';
import '../../css/x/xi_2clbvo.css';
import '../../css/z/zrlmoqz6q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="bsfzcsbqb"/><path class="ri140fi6g"/><path class="xi_2clbvo"/><path class="zrlmoqz6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-tilt-duo"} {...others} />);
}

export default Component;
