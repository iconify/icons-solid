import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/p/psukg5b1p.css';
import '../../css/j/jz7w11b0h.css';
import '../../css/u/uu0aqvb3g.css';
import '../../css/d/d1x0gkpom.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="psukg5b1p"/><circle class="jz7w11b0h"/><path class="uu0aqvb3g"/><path class="d1x0gkpom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sickbed"} {...others} />);
}

export default Component;
