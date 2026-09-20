import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3mbumb3z.css';
import '../../css/l/lajot5bjy.css';
import '../../css/c/cq1xtuk0z.css';
import '../../css/k/k7t-cpb4g.css';
import '../../css/g/gmka6n8-n.css';
import '../../css/c/c609s7c-o.css';
import '../../css/k/kntmw2jrs.css';
import '../../css/s/sl00b_bej.css';
import '../../css/c/c5y5nwbei.css';
import '../../css/s/st45dibfu.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="v3mbumb3z"/><circle class="lajot5bjy"/><path clip-rule="evenodd" class="cq1xtuk0z"/><path class="k7t-cpb4g"/><path clip-rule="evenodd" class="gmka6n8-n"/><path class="c609s7c-o"/><path clip-rule="evenodd" class="kntmw2jrs"/><path class="sl00b_bej"/><path class="c5y5nwbei"/><path class="st45dibfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-hole"} {...others} />);
}

export default Component;
