import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9rydg4_k.css';
import '../../css/i/i-ta_gb6a.css';
import '../../css/e/eia_b8_wj.css';
import '../../css/q/qukm4rwyl.css';
import '../../css/g/g6j__bcxd.css';
import '../../css/u/utkg5bc2m.css';
import '../../css/v/vdt62-nhi.css';
import '../../css/h/h90hn_lsz.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="h9rydg4_k"/><path class="i-ta_gb6a"/><path class="eia_b8_wj"/><path class="qukm4rwyl"/><path class="g6j__bcxd"/><path class="utkg5bc2m"/><path class="vdt62-nhi"/><path class="h90hn_lsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:dragonside"} {...others} />);
}

export default Component;
