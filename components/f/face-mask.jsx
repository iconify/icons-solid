import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/v/vrbc1acpk.css';
import '../../css/w/wtdgo3bxl.css';
import '../../css/x/x2sjumbgo.css';
import '../../css/g/g5t7dqb2f.css';
import '../../css/g/gc464he0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhreSDebX" x1="9" x2="15" y1="5.44" y2="18.87" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGhreSDebX)" class="vrbc1acpk"/><path class="wm-a wtdgo3bxl"/><path class="wm-shine x2sjumbgo"/><path class="g5t7dqb2f wm-shine"/><path class="gc464he0k wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:face-mask"} {...others} />);
}

export default Component;
