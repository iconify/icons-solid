import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_eq6_bdz.css';
import '../../css/d/dw0_qzbpt.css';
import '../../css/z/zrq_j3x2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k_eq6_bdz"/><path class="dw0_qzbpt"/><path class="zrq_j3x2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:vimeo-logo"} {...others} />);
}

export default Component;
