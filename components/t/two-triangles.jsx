import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzv-97b_r.css';
import '../../css/b/bgu0hmbxv.css';
import '../../css/z/zn_5giv4w.css';
import '../../css/d/d2qkukb0p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mzv-97b_r"/><path class="bgu0hmbxv"/><path class="zn_5giv4w"/><path class="d2qkukb0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:two-triangles"} {...others} />);
}

export default Component;
