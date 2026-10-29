import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ph-x7ybtv.css';
import '../../css/r/rxp32ebbh.css';
import '../../css/j/jffzx0eip.css';
import '../../css/y/yxkr8hsbh.css';
import '../../css/g/gvknrc_jx.css';
import '../../css/q/qado12snh.css';
import '../../css/y/y93l-ibqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ph-x7ybtv wm-k"/><path class="rxp32ebbh wm-k"/><path class="jffzx0eip wm-k"/><path class="wm-shine yxkr8hsbh"/><path class="gvknrc_jx wm-a"/><path class="qado12snh wm-a"/><path class="wm-a y93l-ibqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:plane-landing"} {...others} />);
}

export default Component;
