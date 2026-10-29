import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kpnvmn42u.css';
import '../../css/g/gu-s39skn.css';
import '../../css/f/fsc5_uwgf.css';
import '../../css/n/nx0qj1brf.css';
import '../../css/f/f9lxmlb9i.css';
import '../../css/v/vn9n4obyk.css';
import '../../css/m/mamj31z5h.css';
import '../../css/s/sw__cecuh.css';
import '../../css/o/odb4jcbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kpnvmn42u wm-shadow"/><path class="gu-s39skn"/><path class="fsc5_uwgf"/><path class="nx0qj1brf"/><path class="f9lxmlb9i wm-shine"/><path class="vn9n4obyk wm-s"/><path class="mamj31z5h wm-s"/><path class="sw__cecuh wm-s"/><path class="odb4jcbcd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:map-pin-off"} {...others} />);
}

export default Component;
