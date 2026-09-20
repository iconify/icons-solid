import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ya6370b_w.css';
import '../../css/j/jiep1lb5u.css';
import '../../css/z/zr_dy193o.css';
import '../../css/m/mexjjfbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="ya6370b_w"/><path class="jiep1lb5u"/><path class="zr_dy193o"/><path class="mexjjfbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:sunlounger-parasol-sun-palmtree"} {...others} />);
}

export default Component;
