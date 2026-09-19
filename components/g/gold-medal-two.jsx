import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ottlwybsw.css';
import '../../css/j/j0xnz1j1r.css';
import '../../css/f/f3dm2vbaz.css';
import '../../css/f/fhwu_vjpf.css';
import '../../css/t/thph6lbcx.css';
import '../../css/e/eea3vkbob.css';
import '../../css/v/vi_yvhhqi.css';
import '../../css/h/hwn9gvbig.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ottlwybsw"/><path class="j0xnz1j1r"/><path class="f3dm2vbaz"/><path class="fhwu_vjpf"/><path class="thph6lbcx"/><path class="eea3vkbob"/><path class="vi_yvhhqi"/><path class="hwn9gvbig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gold-medal-two"} {...others} />);
}

export default Component;
