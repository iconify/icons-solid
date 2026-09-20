import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/doy9q4b5f.css';
import '../../css/t/tbl4j-bom.css';
import '../../css/g/gnrb8ib6h.css';
import '../../css/m/mvx2c_b9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="tbl4j-bom"/><path class="gnrb8ib6h"/><path class="mvx2c_b9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:confounded-circle-line-duotone"} {...others} />);
}

export default Component;
