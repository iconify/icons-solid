import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/ey6l-111e.css';
import '../../css/b/b33-wybvx.css';
import '../../css/z/zr8f6p4_m.css';
import '../../css/n/nw-lpbbpk.css';
import '../../css/d/dxqwydcbb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ey6l-111e"/><path class="b33-wybvx"/><path class="zr8f6p4_m"/><path class="nw-lpbbpk"/><path class="dxqwydcbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:increase-the-scale"} {...others} />);
}

export default Component;
