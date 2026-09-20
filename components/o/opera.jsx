import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbxsf3bxy.css';
import '../../css/r/rhv2z0mom.css';
import '../../css/s/s35swjb1d.css';
import '../../css/b/b1q0m6j2f.css';
import '../../css/y/yht5e-b4i.css';
import '../../css/l/lczsmyy_j.css';
import '../../css/u/uvb8t0yqx.css';
import '../../css/m/m7u4wybxw.css';
import '../../css/i/ife7p1z_o.css';
import '../../css/g/gnwg93ntl.css';

const viewBox = {"width":1000,"height":1000};
const content = `<linearGradient id="SVGHFlCUt3q" x1="416.623" x2="416.623" y1="16.304" y2="985.446" gradientUnits="userSpaceOnUse"><stop offset=".3" class="rbxsf3bxy"/><stop offset=".438" class="rhv2z0mom"/><stop offset=".594" class="s35swjb1d"/><stop offset=".758" class="b1q0m6j2f"/><stop offset=".927" class="yht5e-b4i"/><stop offset="1" class="lczsmyy_j"/></linearGradient><path fill="url(#SVGHFlCUt3q)" class="uvb8t0yqx"/><linearGradient id="SVGjszRcdOt" x1="667.709" x2="667.709" y1="73.426" y2="930.584" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7u4wybxw"/><stop offset=".7" class="ife7p1z_o"/></linearGradient><path fill="url(#SVGjszRcdOt)" class="gnwg93ntl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:opera"} {...others} />);
}

export default Component;
