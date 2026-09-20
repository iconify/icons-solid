import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzprqc4sw.css';
import '../../css/g/gx8-lbuob.css';
import '../../css/h/hty624bzo.css';
import '../../css/x/xmgnjbcuu.css';
import '../../css/r/rtgjcdbga.css';
import '../../css/e/ektbnl7lq.css';
import '../../css/m/m069yvbyv.css';
import '../../css/o/o4mmu71sb.css';
import '../../css/f/f7ugk1-le.css';
import '../../css/f/fz3xu_3kr.css';
import '../../css/h/h83kp2w4w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jzprqc4sw"/><path class="gx8-lbuob"/><path class="hty624bzo"/><path class="xmgnjbcuu"/><path class="rtgjcdbga"/><path class="ektbnl7lq"/><path class="m069yvbyv"/><path class="o4mmu71sb"/><path class="f7ugk1-le"/><path class="fz3xu_3kr"/><path class="h83kp2w4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:no-bicycles"} {...others} />);
}

export default Component;
