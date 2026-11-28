import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0cl9sbpk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vr5jgobbi.css';
import '../../css/l/lww7c4bwc.css';
import '../../css/w/w9hoqqbod.css';
import '../../css/c/c3dxk4b9p.css';
import '../../css/q/qso6odhhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0cl9sbpk secondary"/><g class="dt0cm9dhy primary"><path class="vr5jgobbi"/><path class="lww7c4bwc"/><path class="w9hoqqbod"/><path class="c3dxk4b9p"/><path class="qso6odhhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gate-nand-duo"} {...others} />);
}

export default Component;
