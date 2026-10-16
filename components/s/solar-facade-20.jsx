import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yb55gvban.css';
import '../../css/u/uc6gh8evi.css';
import '../../css/n/n_1io8b8y.css';
import '../../css/d/ds3sabkax.css';
import '../../css/j/jk-56_nqv.css';
import '../../css/j/jcrxhdbtr.css';
import '../../css/x/x9kii4bwu.css';
import '../../css/o/o0v5dcc2p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yb55gvban"/><path class="uc6gh8evi"/><path class="n_1io8b8y"/><path class="ds3sabkax"/><path class="jk-56_nqv"/><path class="jcrxhdbtr"/><path class="x9kii4bwu"/><path class="o0v5dcc2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-facade-20"} {...others} />);
}

export default Component;
