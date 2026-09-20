import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lf1_tebqc.css';
import '../../css/d/dwn1o_bsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lf1_tebqc"/><path class="dwn1o_bsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:button-stop"} {...others} />);
}

export default Component;
