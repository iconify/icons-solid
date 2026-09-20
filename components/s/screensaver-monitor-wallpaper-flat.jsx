import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xo549vbik.css';
import '../../css/m/mo1ssfbyc.css';
import '../../css/f/fcud8cp4g.css';
import '../../css/v/vddekprlm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xo549vbik"/><path clip-rule="evenodd" class="mo1ssfbyc"/><path class="fcud8cp4g"/><path clip-rule="evenodd" class="vddekprlm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:screensaver-monitor-wallpaper-flat"} {...others} />);
}

export default Component;
