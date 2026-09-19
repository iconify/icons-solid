import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szy1pmb9g.css';
import '../../css/d/d0-9ecbzz.css';
import '../../css/g/gt4_nnbnq.css';
import '../../css/z/zjjkwlb6x.css';
import '../../css/e/ew2elo9xn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="szy1pmb9g"/><path class="d0-9ecbzz"/><path class="gt4_nnbnq"/><path class="zjjkwlb6x"/><path class="ew2elo9xn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:watch"} {...others} />);
}

export default Component;
