import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whoexvdln.css';
import '../../css/e/erc2hgvoq.css';
import '../../css/r/r00m26brt.css';
import '../../css/l/lspwelb-r.css';
import '../../css/v/vplh0rb6f.css';
import '../../css/r/rjo-qcfrj.css';
import '../../css/k/kybbyt4wx.css';
import '../../css/f/f_hvwcoce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="whoexvdln"/><path class="erc2hgvoq"/><path class="r00m26brt"/><path class="lspwelb-r"/><path class="vplh0rb6f"/><path class="rjo-qcfrj"/><path class="kybbyt4wx"/><path class="f_hvwcoce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:facemask-square-bold-duotone"} {...others} />);
}

export default Component;
