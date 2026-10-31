import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ti4wjb7ck.css';
import '../../css/y/yuv1g6m1w.css';
import '../../css/d/dlxq_bc1x.css';
import '../../css/i/iakqk4b5o.css';
import '../../css/g/gduhwfjjj.css';
import '../../css/o/o5bsjdrcx.css';
import '../../css/o/o6o2nkb8v.css';
import '../../css/j/jo0nxcbyn.css';
import '../../css/q/qfwlprb2c.css';
import '../../css/c/cr3mmy8oy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ti4wjb7ck wm-shadow"/><path class="wm-k yuv1g6m1w"/><path class="dlxq_bc1x wm-k"/><path class="iakqk4b5o wm-k"/><path class="gduhwfjjj wm-k"/><path class="o5bsjdrcx wm-shine"/><path class="o6o2nkb8v wm-k"/><path class="jo0nxcbyn wm-k"/><path class="qfwlprb2c wm-k"/><path class="cr3mmy8oy wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:triangle"} {...others} />);
}

export default Component;
