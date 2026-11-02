import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qe-hr76ia.css';
import '../../css/z/zf-fvnbte.css';
import '../../css/z/zoshsub_z.css';
import '../../css/y/yafimeb1v.css';
import '../../css/b/b1gjbib5f.css';
import '../../css/k/k1d1cac2d.css';
import '../../css/c/cygx51m6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="qe-hr76ia"/><path class="zf-fvnbte"/><path class="zoshsub_z"/><path class="yafimeb1v"/><path class="b1gjbib5f"/><path class="k1d1cac2d"/><path class="cygx51m6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:flower"} {...others} />);
}

export default Component;
