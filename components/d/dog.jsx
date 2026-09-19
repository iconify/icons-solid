import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxed8u81r.css';
import '../../css/g/go3ospizx.css';
import '../../css/w/w394v7_1v.css';
import '../../css/q/qgmbq0owx.css';
import '../../css/k/kxlzjtb6v.css';
import '../../css/x/xbf4qkbwj.css';
import '../../css/g/gbsf0r5os.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gxed8u81r"/><path class="go3ospizx"/><path class="w394v7_1v"/><path class="qgmbq0owx"/><path class="kxlzjtb6v"/><path class="xbf4qkbwj"/><path class="gbsf0r5os"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:dog"} {...others} />);
}

export default Component;
