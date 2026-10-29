import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gh0nmezmo.css';
import '../../css/o/ox3-_aciu.css';
import '../../css/h/hd0ryof6n.css';
import '../../css/u/uxl8qqbog.css';
import '../../css/d/dqaawzroc.css';
import '../../css/t/tgcr2lxri.css';
import '../../css/w/wkd2sabch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gh0nmezmo wm-k"/><path class="ox3-_aciu wm-k"/><path class="hd0ryof6n wm-k"/><path class="uxl8qqbog wm-shine"/><path class="dqaawzroc wm-a"/><path class="tgcr2lxri wm-a"/><path class="wkd2sabch wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:minimize"} {...others} />);
}

export default Component;
