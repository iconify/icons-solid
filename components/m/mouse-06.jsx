import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kpn67l18v.css';
import '../../css/o/otc11ybpz.css';
import '../../css/c/cqkzxjbmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kpn67l18v"/><path class="otc11ybpz"/><path class="cqkzxjbmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-06"} {...others} />);
}

export default Component;
