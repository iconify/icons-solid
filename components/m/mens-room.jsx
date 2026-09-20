import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrks0fbpf.css';
import '../../css/t/ti-r20tkm.css';
import '../../css/h/hp0qij7wl.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/t/tsqpl9bcs.css';
import '../../css/p/pudj42bzy.css';
import '../../css/v/vx4v0_b3y.css';
import '../../css/q/qjtn_dbax.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mrks0fbpf"/><path class="ti-r20tkm"/><circle class="hp0qij7wl"/><g class="brzn_0bpr"><circle class="tsqpl9bcs"/><path class="pudj42bzy"/><path class="vx4v0_b3y"/><path class="qjtn_dbax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mens-room"} {...others} />);
}

export default Component;
