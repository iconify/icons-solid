import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lffdcuv3i.css';
import '../../css/k/k4tx50b5w.css';
import '../../css/z/zaeofbrdr.css';
import '../../css/q/qf_dx4b0m.css';
import '../../css/u/u9dmjbcfg.css';
import '../../css/c/co9tsgamo.css';
import '../../css/n/nczxgma0a.css';
import '../../css/e/eolo76wxj.css';
import '../../css/s/sv13wfent.css';
import '../../css/x/xbwf-wbqw.css';
import '../../css/l/l3f60db2v.css';
import '../../css/x/xvkf7lo0j.css';

const viewBox = {"width":512,"height":512};
const content = `<radialGradient id="SVGWCT0GeBJ" cx="255.998" cy="256" r="247.406" gradientUnits="userSpaceOnUse"><stop offset="0" class="lffdcuv3i"/><stop offset=".51" class="k4tx50b5w"/><stop offset=".733" class="zaeofbrdr"/><stop offset=".899" class="qf_dx4b0m"/><stop offset="1" class="u9dmjbcfg"/></radialGradient><path fill="url(#SVGWCT0GeBJ)" class="co9tsgamo"/><path class="nczxgma0a"/><radialGradient id="SVGcXiOzbAY" cx="251.368" cy="249.171" r="82.269" gradientUnits="userSpaceOnUse"><stop offset="0" class="eolo76wxj"/><stop offset="1" class="sv13wfent"/></radialGradient><circle fill="url(#SVGcXiOzbAY)" class="xbwf-wbqw"/><circle class="l3f60db2v"/><path class="xvkf7lo0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gerbera"} {...others} />);
}

export default Component;
