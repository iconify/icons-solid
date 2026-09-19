import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hz0lkwy3f.css';
import '../../css/y/ylmbvrbqt.css';
import '../../css/e/exs4x5zal.css';
import '../../css/y/y48cvxh1k.css';
import '../../css/l/llybanfdq.css';
import '../../css/s/s85b82byz.css';
import '../../css/b/br5xmxzpv.css';
import '../../css/o/omr3ux96y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><ellipse class="hz0lkwy3f"/><ellipse class="ylmbvrbqt"/><path class="exs4x5zal"/><path class="y48cvxh1k"/><path class="llybanfdq"/><path class="s85b82byz"/><path class="br5xmxzpv"/><ellipse class="omr3ux96y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:face-powder"} {...others} />);
}

export default Component;
