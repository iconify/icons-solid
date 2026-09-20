import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e94lhypgc.css';
import '../../css/f/fu1vy-bjm.css';
import '../../css/h/ha7cn8b9z.css';
import '../../css/b/biyanj8yo.css';
import '../../css/z/zsm7q2_fn.css';
import '../../css/u/uxq2iwutk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e94lhypgc"/><path class="fu1vy-bjm"/><path class="ha7cn8b9z"/><path class="biyanj8yo"/><path class="zsm7q2_fn"/><path class="uxq2iwutk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:goaccess"} {...others} />);
}

export default Component;
