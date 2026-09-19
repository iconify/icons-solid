import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rcxs0t6qt.css';
import '../../css/c/c22h241vp.css';
import '../../css/s/squd7s8xm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="rcxs0t6qt"/><circle class="c22h241vp"/><path class="squd7s8xm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:editing"} {...others} />);
}

export default Component;
