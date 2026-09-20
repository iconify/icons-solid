import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/k/kqwq9psty.css';
import '../../css/x/x26uwjy8s.css';
import '../../css/p/pf5356ber.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="u9hq09b6k"/><path class="kqwq9psty"/><path class="x26uwjy8s"/><path class="pf5356ber"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-malawi"} {...others} />);
}

export default Component;
