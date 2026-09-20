import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vgca7vgmj.css';
import '../../css/s/st_nvnc2y.css';
import '../../css/s/sdpnk9gpp.css';
import '../../css/v/v9lseff7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vgca7vgmj"/><path class="st_nvnc2y"/><path class="sdpnk9gpp"/><path class="v9lseff7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:castle-4"} {...others} />);
}

export default Component;
