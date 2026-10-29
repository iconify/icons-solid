import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sjyrbhajs.css';
import '../../css/v/vvn334twb.css';
import '../../css/w/wjqid3b_n.css';
import '../../css/o/ot9hu4bgo.css';
import '../../css/o/o-86s11xe.css';
import '../../css/i/ih-vgqrqd.css';
import '../../css/k/k44jknbog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sjyrbhajs wm-k"/><path class="vvn334twb wm-k"/><path class="wjqid3b_n wm-k"/><path class="ot9hu4bgo wm-a"/><path class="o-86s11xe wm-a"/><path class="ih-vgqrqd wm-shine"/><path class="k44jknbog wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:star-half"} {...others} />);
}

export default Component;
