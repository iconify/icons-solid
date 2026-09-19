import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fugbhetlq.css';
import '../../css/h/hh0j7ac0b.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="fugbhetlq"/><path class="hh0j7ac0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:folder-plus"} {...others} />);
}

export default Component;
