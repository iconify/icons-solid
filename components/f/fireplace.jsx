import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1tiv6-2a.css';
import '../../css/j/jwcwzwb3a.css';
import '../../css/w/w7nfmdbvb.css';
import '../../css/k/kpsy5ub4w.css';
import '../../css/f/fd-q9_9oy.css';
import '../../css/f/frazg901j.css';
import '../../css/n/nsy8mqbvp.css';
import '../../css/t/t469gac8i.css';
import '../../css/i/iyy0bvwsj.css';
import '../../css/n/ncjaiie-e.css';
import '../../css/v/vhdcfq_te.css';
import '../../css/j/j5m3qtbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n1tiv6-2a wm-shadow"/><path class="jwcwzwb3a wm-shadow"/><path class="w7nfmdbvb"/><path class="kpsy5ub4w"/><path class="fd-q9_9oy"/><path class="frazg901j"/><path class="nsy8mqbvp wm-shine"/><path class="t469gac8i wm-shine"/><path class="iyy0bvwsj"/><path class="ncjaiie-e"/><path class="vhdcfq_te"/><path class="j5m3qtbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:fireplace"} {...others} />);
}

export default Component;
