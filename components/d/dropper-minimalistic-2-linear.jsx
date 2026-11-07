import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yvr49nc7e.css';
import '../../css/g/gswougl7d.css';
import '../../css/z/zj48ghuwd.css';
import '../../css/p/pq5xj2bli.css';
import '../../css/z/zfge7hb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yvr49nc7e"/><path class="gswougl7d"/><path class="zj48ghuwd"/><path class="pq5xj2bli"/><path class="zfge7hb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-minimalistic-2-linear"} {...others} />);
}

export default Component;
