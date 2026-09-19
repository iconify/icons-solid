import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jurz1cbnv.css';
import '../../css/o/oeevi_qsd.css';
import '../../css/d/dbinw_m8x.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="jurz1cbnv"/><path class="oeevi_qsd"/><path class="dbinw_m8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ellipsis-square-duo"} {...others} />);
}

export default Component;
