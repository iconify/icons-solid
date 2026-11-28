import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yo0duhs6b.css';
import '../../css/l/lww7c4bwc.css';
import '../../css/x/xh77j1kmh.css';
import '../../css/q/qso6odhhx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yo0duhs6b"/><path class="lww7c4bwc"/><path class="xh77j1kmh"/><path class="qso6odhhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gate-not"} {...others} />);
}

export default Component;
