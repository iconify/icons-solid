import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t0sae48qw.css';
import '../../css/d/dpjo41b4m.css';
import '../../css/v/v_g7r_1us.css';
import '../../css/j/j0nlsrb2g.css';
import '../../css/o/ogolnsb4l.css';
import '../../css/j/jiyslx5wq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="t0sae48qw wm-deco"/><path class="dpjo41b4m wm-deco"/><path class="v_g7r_1us wm-deco"/><path class="j0nlsrb2g wm-k"/><path class="ogolnsb4l wm-a"/><path class="jiyslx5wq wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shopping-cart-blueprint"} {...others} />);
}

export default Component;
