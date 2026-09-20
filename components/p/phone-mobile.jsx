import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/herg040oo.css';
import '../../css/a/ahy1hip_r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="herg040oo"/><path class="ahy1hip_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:phone-mobile"} {...others} />);
}

export default Component;
