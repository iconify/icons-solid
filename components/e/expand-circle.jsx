import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/b/bgv3jyovj.css';
import '../../css/d/duc17k2td.css';
import '../../css/e/edr3z_b5u.css';
import '../../css/m/mingyz5ad.css';
import '../../css/e/ekdtdpbjz.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="bgv3jyovj"/><path class="duc17k2td"/><path class="edr3z_b5u"/><path class="mingyz5ad"/><path class="ekdtdpbjz"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:expand-circle"} {...others} />);
}

export default Component;
