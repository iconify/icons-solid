import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5ld_vamv.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o0fyexb-p.css';
import '../../css/g/gi5xpgbbc.css';
import '../../css/r/rwzkugbdx.css';
import '../../css/f/fe5ncacmu.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGkBW1peEv"><path class="m5ld_vamv"/></clipPath></defs><g clip-path="url(#SVGkBW1peEv)" transform="translate(-20)scale(.72249)" class="d2kvgvbvc"><path class="o0fyexb-p"/><path class="gi5xpgbbc"/><path class="rwzkugbdx"/><path class="fe5ncacmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sg-1x1"} {...others} />);
}

export default Component;
