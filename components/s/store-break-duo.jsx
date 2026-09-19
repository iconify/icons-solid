import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brdjalbqk.css';
import '../../css/u/u75arybek.css';
import '../../css/z/zvmv21b_v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="brdjalbqk"/><path class="u75arybek"/><path class="zvmv21b_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:store-break-duo"} {...others} />);
}

export default Component;
