import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/d/d1pb_kbyv.css';
import '../../css/z/zzjm9eb0d.css';
import '../../css/j/jfwlpkx2w.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="d1pb_kbyv"/><path class="zzjm9eb0d"/><path class="jfwlpkx2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cr-1x1"} {...others} />);
}

export default Component;
