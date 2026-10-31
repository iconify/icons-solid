import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7n48pb0g.css';
import '../../css/k/kk4ixzbny.css';
import '../../css/d/dfw347bnt.css';
import '../../css/q/qg_igdcwq.css';
import '../../css/h/hdb2_ccuy.css';
import '../../css/g/gr_kkvbjc.css';
import '../../css/q/qf51ubc0r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a7n48pb0g"/><path class="kk4ixzbny"/><path class="dfw347bnt"/><path class="qg_igdcwq"/><path class="hdb2_ccuy"/><path class="gr_kkvbjc"/><path class="qf51ubc0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:credit-card-3-pop"} {...others} />);
}

export default Component;
