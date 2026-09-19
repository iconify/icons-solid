import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6lk33buc.css';
import '../../css/t/t77i9xitf.css';
import '../../css/y/yc434x-ho.css';
import '../../css/p/pta-cpbea.css';
import '../../css/v/v5xildbsu.css';
import '../../css/x/x-p_m4bah.css';
import '../../css/h/ht3z8-bqi.css';
import '../../css/x/xt7t2hbop.css';
import '../../css/s/s969ov1lf.css';
import '../../css/w/wjp3vfbbu.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGoRKEI2uZ" x1="-18.592" x2="-18.592" y1="-81.414" y2="204.37" gradientTransform="translate(8.263 36.184)scale(.44444)" gradientUnits="userSpaceOnUse"><stop offset="0" class="q6lk33buc"/><stop offset="1" class="t77i9xitf"/></linearGradient><linearGradient id="SVG4rOXTkiy" x1="-13.699" x2="-13.699" y1="-7.486" y2="156.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="yc434x-ho"/><stop offset="1" class="pta-cpbea"/></linearGradient><linearGradient id="SVG8SeuPcAy" x1="-13.699" x2="-13.699" y1="-7.486" y2="151.61" gradientUnits="userSpaceOnUse"><stop offset="0" class="v5xildbsu"/><stop offset="1" class="x-p_m4bah"/></linearGradient></defs><path fill="url(#SVGoRKEI2uZ)" class="ht3z8-bqi"/><path fill="url(#SVG4rOXTkiy)" transform="translate(72.688 35.556)scale(.44444)" class="xt7t2hbop"/><path fill="url(#SVG8SeuPcAy)" transform="translate(72.688 35.556)scale(.44444)" class="s969ov1lf"/><path class="wjp3vfbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vala"} {...others} />);
}

export default Component;
