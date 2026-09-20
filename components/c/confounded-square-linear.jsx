import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/t/tbl4j-bom.css';
import '../../css/g/gnrb8ib6h.css';
import '../../css/m/mkl-hbb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="tbl4j-bom"/><path class="gnrb8ib6h"/><path class="mkl-hbb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:confounded-square-linear"} {...others} />);
}

export default Component;
