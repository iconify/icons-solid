import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i_r28w9ux.css';
import '../../css/e/ehbjf7b1o.css';
import '../../css/r/r5jty3boa.css';
import '../../css/c/c5jf35vuo.css';
import '../../css/e/ez-k6ub0g.css';
import '../../css/x/x6oztzt0y.css';
import '../../css/n/nlt6e3ngk.css';
import '../../css/w/wlsgde0ul.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="i_r28w9ux"/><path class="ehbjf7b1o"/><path class="r5jty3boa"/><path class="c5jf35vuo"/><path class="ez-k6ub0g"/><path class="x6oztzt0y"/><path class="nlt6e3ngk"/><path class="wlsgde0ul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:graphic-stitching-three"} {...others} />);
}

export default Component;
