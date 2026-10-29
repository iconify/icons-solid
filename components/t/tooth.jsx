import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d1gj1tsid.css';
import '../../css/m/mef7-gyuh.css';
import '../../css/c/cokyzhjch.css';
import '../../css/x/xqifim4zy.css';
import '../../css/r/ravj5ul1d.css';
import '../../css/v/vh3m627_w.css';
import '../../css/f/fs-4mqdoi.css';
import '../../css/w/wkiguvryj.css';
import '../../css/i/i_saxcb8k.css';
import '../../css/y/yuxxq2euk.css';
import '../../css/i/i794ovbla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d1gj1tsid wm-shadow"/><path class="mef7-gyuh wm-shadow"/><path class="cokyzhjch"/><path class="xqifim4zy"/><path class="ravj5ul1d"/><path class="vh3m627_w"/><path class="fs-4mqdoi wm-shine"/><path class="wkiguvryj wm-shine"/><path class="i_saxcb8k"/><path class="yuxxq2euk"/><path class="i794ovbla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:tooth"} {...others} />);
}

export default Component;
