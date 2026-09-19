import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvubgbbtn.css';
import '../../css/u/u-dp037qb.css';
import '../../css/c/cii--0b6u.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rvubgbbtn"/><path clip-rule="evenodd" class="u-dp037qb"/><path class="cii--0b6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:music-note-double-print"} {...others} />);
}

export default Component;
