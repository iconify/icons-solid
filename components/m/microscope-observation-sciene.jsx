import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/az-sp5mlu.css';
import '../../css/j/jhuh8jbcn.css';
import '../../css/b/b076blkjl.css';
import '../../css/d/d3ie46nxk.css';
import '../../css/n/nvk58zbfu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="az-sp5mlu"/><path class="jhuh8jbcn"/><path class="b076blkjl"/><path class="d3ie46nxk"/><path class="nvk58zbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:microscope-observation-sciene"} {...others} />);
}

export default Component;
