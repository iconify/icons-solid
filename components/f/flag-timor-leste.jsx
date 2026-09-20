import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epbe6rpwg.css';
import '../../css/x/xm2m8_bcc.css';
import '../../css/k/k0ichdcsq.css';
import '../../css/b/bnuw0xbit.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="epbe6rpwg"/><path class="xm2m8_bcc"/><path class="k0ichdcsq"/><path class="bnuw0xbit"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-timor-leste"} {...others} />);
}

export default Component;
