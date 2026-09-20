import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htd15jenx.css';
import '../../css/u/uizdbil_b.css';
import '../../css/h/h6er5zjrc.css';
import '../../css/n/njr7sy4rm.css';
import '../../css/f/fns04wbbb.css';
import '../../css/v/v8mwytikb.css';
import '../../css/x/x8182zzir.css';
import '../../css/s/slub28d0y.css';
import '../../css/e/ewdgeybcj.css';
import '../../css/j/jugp0mbvp.css';
import '../../css/o/ojukncb5r.css';
import '../../css/x/xzz95n2hm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="htd15jenx"/><path class="uizdbil_b"/><path class="h6er5zjrc"/><path class="njr7sy4rm"/><path class="fns04wbbb"/><path class="v8mwytikb"/><path class="x8182zzir"/><path class="slub28d0y"/><path class="ewdgeybcj"/><path class="jugp0mbvp"/><path class="ojukncb5r"/><path class="xzz95n2hm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:man-frowning-1"} {...others} />);
}

export default Component;
