import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pdrooycdc.css';
import '../../css/j/j3rjalw-t.css';
import '../../css/i/iku5y4bmg.css';
import '../../css/m/m0_bcniww.css';
import '../../css/l/lcixq76zh.css';
import '../../css/o/o40gyoiqb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="pdrooycdc"/><path class="j3rjalw-t"/><path class="iku5y4bmg"/><path class="m0_bcniww"/><path class="lcixq76zh"/><circle class="o40gyoiqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:assembly-line"} {...others} />);
}

export default Component;
