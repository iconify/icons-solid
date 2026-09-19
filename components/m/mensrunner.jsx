import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-zn48y0g.css';
import '../../css/b/bb-5zccdp.css';
import '../../css/j/j1h5_7bvu.css';
import '../../css/y/yzo83_bdp.css';
import '../../css/s/se-h4ky2l.css';
import '../../css/p/p1tusbbuc.css';
import '../../css/m/mt2adq7hs.css';
import '../../css/c/c-x1y6w6b.css';
import '../../css/q/q6xpq9bbp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k-zn48y0g"/><path class="bb-5zccdp"/><path class="j1h5_7bvu"/><circle class="yzo83_bdp"/><circle class="se-h4ky2l"/><path class="p1tusbbuc"/><path class="mt2adq7hs"/><path class="c-x1y6w6b"/><path class="q6xpq9bbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mensrunner"} {...others} />);
}

export default Component;
