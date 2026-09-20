import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fjqy4muuq.css';
import '../../css/l/lvd9hj0kw.css';
import '../../css/u/u-62wbcax.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/ojdl96y2v.css';
import '../../css/r/r5pybk82q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fjqy4muuq"/><path class="lvd9hj0kw"/><path clip-rule="evenodd" class="u-62wbcax"/><g class="mc2zb0bvp"><path class="ojdl96y2v"/><path class="r5pybk82q"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-slider-2-bold-duotone"} {...others} />);
}

export default Component;
