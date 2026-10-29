import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xr7l54q5y.css';
import '../../css/q/q1s1269vd.css';
import '../../css/x/xmp51wkpc.css';
import '../../css/o/o15yzwbys.css';
import '../../css/z/z3jw8uyio.css';
import '../../css/z/zpk1-h5hr.css';
import '../../css/p/plgor5jqt.css';
import '../../css/e/ef0vwgbyf.css';
import '../../css/s/s6v6cqbvj.css';
import '../../css/j/jj0nh7d_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow xr7l54q5y"/><path class="q1s1269vd wm-shadow"/><path class="xmp51wkpc"/><path class="o15yzwbys"/><path class="z3jw8uyio"/><path class="zpk1-h5hr"/><path class="plgor5jqt"/><path class="ef0vwgbyf wm-shine"/><path class="s6v6cqbvj wm-shine"/><path class="jj0nh7d_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:type"} {...others} />);
}

export default Component;
