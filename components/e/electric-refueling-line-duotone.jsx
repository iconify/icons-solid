import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yfy6f9w0h.css';
import '../../css/k/kzep6cbwm.css';
import '../../css/w/wu-2fgbxv.css';
import '../../css/l/lgb5zeffk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yfy6f9w0h"/><path class="kzep6cbwm"/><path class="wu-2fgbxv"/><path class="lgb5zeffk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:electric-refueling-line-duotone"} {...others} />);
}

export default Component;
