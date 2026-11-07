import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eheqshbap.css';
import '../../css/l/lbkzxwwal.css';
import '../../css/f/fgg1dpb1y.css';
import '../../css/s/s7cx_pbcn.css';
import '../../css/e/e06he2b9j.css';
import '../../css/t/tyu1wy6bm.css';
import '../../css/c/ctpju6bji.css';
import '../../css/j/jjk_8ebes.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eheqshbap"/><path class="lbkzxwwal"/><path class="fgg1dpb1y"/><path class="s7cx_pbcn"/><path class="e06he2b9j"/><path class="tyu1wy6bm"/><path class="ctpju6bji"/><path class="jjk_8ebes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:facemask-square-bold-duotone"} {...others} />);
}

export default Component;
