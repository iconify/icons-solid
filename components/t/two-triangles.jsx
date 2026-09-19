import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1yavdbge.css';
import '../../css/b/bqog6ccsk.css';
import '../../css/z/zn_5giv4w.css';
import '../../css/d/d2qkukb0p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="o1yavdbge"/><path class="bqog6ccsk"/><path class="zn_5giv4w"/><path class="d2qkukb0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:two-triangles"} {...others} />);
}

export default Component;
