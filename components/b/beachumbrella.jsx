import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpw2xnbux.css';
import '../../css/v/vfdf3nbhy.css';
import '../../css/p/pm7kpvbwh.css';
import '../../css/l/lnaeo8bdy.css';
import '../../css/u/uw-rfkb_f.css';
import '../../css/m/mz98vyj6a.css';
import '../../css/b/bzvi8dbvl.css';
import '../../css/a/aeed4znqh.css';
import '../../css/e/es63cicfw.css';
import '../../css/w/wew31zblk.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="kpw2xnbux"/><path class="vfdf3nbhy"/><path class="pm7kpvbwh"/><path class="lnaeo8bdy"/><path class="uw-rfkb_f"/><ellipse class="mz98vyj6a"/><path class="bzvi8dbvl"/><path class="aeed4znqh"/><path class="es63cicfw"/><path class="wew31zblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:beachumbrella"} {...others} />);
}

export default Component;
