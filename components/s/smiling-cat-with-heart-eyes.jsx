import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8q6r-b0v.css';
import '../../css/l/lf7kg_bnu.css';
import '../../css/f/frs9qwylh.css';
import '../../css/c/cdtskgbpa.css';
import '../../css/h/hcdfcn4yk.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/a6658-bbb.css';
import '../../css/p/pvosdhbum.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b8q6r-b0v"/><path class="lf7kg_bnu"/><path class="frs9qwylh"/><path class="cdtskgbpa"/><path class="hcdfcn4yk"/><g class="ij2x_72vy"><path class="a6658-bbb"/><path class="pvosdhbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:smiling-cat-with-heart-eyes"} {...others} />);
}

export default Component;
