import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/m/m-hlsm2vt.css';
import '../../css/z/zvjo8w_yo.css';
import '../../css/p/plmz04b5x.css';
import '../../css/z/zqwf9gbgu.css';
import '../../css/o/ojtovobzl.css';
import '../../css/e/e65acbygm.css';
import '../../css/l/l02k6mewl.css';
import '../../css/e/efmc8w_lo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="m-hlsm2vt"/><path class="zvjo8w_yo"/><path class="plmz04b5x"/><path class="zqwf9gbgu"/><path class="ojtovobzl"/><path class="e65acbygm"/><path class="l02k6mewl"/><path class="efmc8w_lo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:lockers"} {...others} />);
}

export default Component;
