import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/y/y5vgbcb_s.css';
import '../../css/k/ksa1h0xgx.css';
import '../../css/j/jstdskbcr.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="y5vgbcb_s"/><path class="ksa1h0xgx"/><path class="jstdskbcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:it-4x3"} {...others} />);
}

export default Component;
