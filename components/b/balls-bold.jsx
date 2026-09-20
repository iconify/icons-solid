import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/riqupybve.css';
import '../../css/l/lzttk4b4v.css';
import '../../css/c/crowf5bqr.css';
import '../../css/m/mcdsu022o.css';
import '../../css/d/dy1fr3e2o.css';
import '../../css/x/xp1wxg51f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="riqupybve"/><path clip-rule="evenodd" class="lzttk4b4v"/><path class="crowf5bqr"/><path class="mcdsu022o"/><path class="dy1fr3e2o"/><path class="xp1wxg51f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:balls-bold"} {...others} />);
}

export default Component;
