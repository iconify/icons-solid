import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny_t0iljk.css';
import '../../css/e/e771iobxu.css';
import '../../css/x/x6c4wbbud.css';
import '../../css/d/d-at1idrl.css';
import '../../css/r/r03wl7-qn.css';
import '../../css/u/ukyqjr0ax.css';
import '../../css/l/lfz3bv1ey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ny_t0iljk wm-shadow"/><path class="e771iobxu wm-k"/><path class="wm-k x6c4wbbud"/><path class="d-at1idrl wm-k"/><path class="r03wl7-qn wm-k"/><path class="ukyqjr0ax wm-k"/><path class="lfz3bv1ey wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:puzzle-piece"} {...others} />);
}

export default Component;
