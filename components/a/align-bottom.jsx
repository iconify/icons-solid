import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bwgm2bcou.css';
import '../../css/o/opdiumb1u.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><rect class="bwgm2bcou"/><path class="opdiumb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:align-bottom"} {...others} />);
}

export default Component;
