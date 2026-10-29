import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7cop_bdb.css';
import '../../css/n/ndmh7cbhk.css';
import '../../css/n/nse4f_brf.css';
import '../../css/e/ejsr74b3l.css';
import '../../css/o/oxlml569n.css';
import '../../css/f/fvxskx97q.css';
import '../../css/u/u8qvefbrw.css';
import '../../css/r/r6w_63p0f.css';
import '../../css/t/tc_3kibji.css';
import '../../css/b/buk0kcrdl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow y7cop_bdb"/><path class="ndmh7cbhk wm-k"/><path class="nse4f_brf wm-k"/><path class="ejsr74b3l wm-k"/><path class="oxlml569n wm-k"/><path class="fvxskx97q wm-k"/><path class="u8qvefbrw wm-shine"/><path class="r6w_63p0f wm-a"/><path class="tc_3kibji wm-a"/><path class="buk0kcrdl wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:landmark"} {...others} />);
}

export default Component;
