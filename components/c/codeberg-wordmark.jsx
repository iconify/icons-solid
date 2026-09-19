import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwakrfi8k.css';
import '../../css/s/sev8ixb0d.css';
import '../../css/n/ndtw1t1cq.css';
import '../../css/u/uin5mlq-a.css';
import '../../css/d/dglmk3l2t.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGrxO3qcuF" x1="42519.285" x2="42575.336" y1="-7078.789" y2="-6966.931" gradientUnits="userSpaceOnUse" href="#SVGB17cveaH"/><linearGradient id="SVGB17cveaH"><stop offset="0" class="cwakrfi8k"/><stop offset=".495" class="sev8ixb0d"/><stop offset="1" class="sev8ixb0d"/></linearGradient></defs><path class="ndtw1t1cq"/><path fill="url(#SVGrxO3qcuF)" transform="translate(-21301.27 3579.89)scale(.50255)" class="uin5mlq-a"/><path class="dglmk3l2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:codeberg-wordmark"} {...others} />);
}

export default Component;
