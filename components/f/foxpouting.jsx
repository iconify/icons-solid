import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z61tzc56x.css';
import '../../css/z/zq52d8kkr.css';
import '../../css/q/qhegkcb9q.css';
import '../../css/j/j0s02x4ym.css';
import '../../css/l/ldxjxpc6h.css';
import '../../css/x/xsbmizb1a.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z61tzc56x"/><path class="zq52d8kkr"/><path class="qhegkcb9q"/><path class="j0s02x4ym"/><path class="ldxjxpc6h"/><path class="xsbmizb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:foxpouting"} {...others} />);
}

export default Component;
