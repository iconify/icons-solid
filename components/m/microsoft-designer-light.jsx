import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk_28gdkl.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/a5d0jbb9o.css';
import '../../css/c/c98y_fk5b.css';
import '../../css/i/itrz8idgc.css';
import '../../css/w/wz3n4tv8m.css';

const viewBox = {"width":512,"height":512};
const content = `<radialGradient id="SVGsKkVM8lW" cx="26.7" cy="396.6" r="362.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="rk_28gdkl"/><stop offset="1" class="vc--wpv5i"/></radialGradient><path fill="url(#SVGsKkVM8lW)" class="a5d0jbb9o"/><radialGradient id="SVGzIWUFcPd" cx="111.871" cy="536.815" r="1" gradientTransform="rotate(218.202 -75650.983 115403.5)scale(-570.09702 471.10196)" gradientUnits="userSpaceOnUse"><stop offset="0" class="c98y_fk5b"/><stop offset="1" class="itrz8idgc"/></radialGradient><path fill="url(#SVGzIWUFcPd)" class="wz3n4tv8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-designer-light"} {...others} />);
}

export default Component;
