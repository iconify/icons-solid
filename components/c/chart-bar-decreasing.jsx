import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_3661fyr.css';
import '../../css/w/wtquk7o9x.css';
import '../../css/l/l4_f4nbmv.css';
import '../../css/o/oamqpgbis.css';
import '../../css/i/iimimvb8o.css';
import '../../css/a/aenq6lblw.css';
import '../../css/j/j-3qlr5-v.css';
import '../../css/s/sc-rrfbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v_3661fyr wm-shadow"/><path class="wm-k wtquk7o9x"/><path class="l4_f4nbmv wm-k"/><path class="oamqpgbis wm-k"/><path class="iimimvb8o wm-k"/><path class="aenq6lblw wm-shine"/><path class="j-3qlr5-v wm-a"/><path class="sc-rrfbqk wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chart-bar-decreasing"} {...others} />);
}

export default Component;
