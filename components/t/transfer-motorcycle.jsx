import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/r/rtrjxzg8l.css';
import '../../css/x/xk_xbzbbz.css';
import '../../css/i/i-097zb-k.css';
import '../../css/p/pwf5t39du.css';
import '../../css/j/j96qlr67y.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="pr52f_b5y"><path class="rtrjxzg8l"/><path class="xk_xbzbbz"/><path class="i-097zb-k"/><path class="pwf5t39du"/><path class="j96qlr67y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:transfer-motorcycle"} {...others} />);
}

export default Component;
