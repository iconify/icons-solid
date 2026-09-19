import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbk9e4bvj.css';
import '../../css/u/um8s3tx9x.css';
import '../../css/p/pexcy38ow.css';
import '../../css/z/zm92hgred.css';
import '../../css/m/miqwrbcoi.css';
import '../../css/v/vylzxxy2d.css';
import '../../css/q/q8r11-i9p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rbk9e4bvj"/><path class="um8s3tx9x"/><path class="pexcy38ow"/><path class="zm92hgred"/><path class="miqwrbcoi"/><path class="vylzxxy2d"/><path class="q8r11-i9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:penoverstampedenvelope"} {...others} />);
}

export default Component;
