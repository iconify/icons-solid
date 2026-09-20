import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fzhdv81et.css';
import '../../css/s/s-4003bnd.css';
import '../../css/w/wezx7b1hb.css';
import '../../css/y/ylffdkb4x.css';
import '../../css/u/uwskfhbgy.css';
import '../../css/g/gmkf2qbpy.css';
import '../../css/k/ksmtqeb9v.css';
import '../../css/m/mbd8hkb-a.css';
import '../../css/x/xi2sqfnxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fzhdv81et"/><path class="s-4003bnd"/><path class="wezx7b1hb"/><path class="ylffdkb4x"/><path class="uwskfhbgy"/><path class="gmkf2qbpy"/><path class="ksmtqeb9v"/><path class="mbd8hkb-a"/><path class="xi2sqfnxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:wifi-transfer"} {...others} />);
}

export default Component;
