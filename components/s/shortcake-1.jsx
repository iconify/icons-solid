import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0-ugcc7m.css';
import '../../css/v/vj-pyybks.css';
import '../../css/t/t39ohkbse.css';
import '../../css/k/kq9czgbpf.css';
import '../../css/b/bol_ecc_z.css';
import '../../css/g/g8yxo7frq.css';
import '../../css/p/p0uohgbfj.css';
import '../../css/l/ljtt_kbno.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a0-ugcc7m"/><path class="vj-pyybks"/><path class="t39ohkbse"/><path class="kq9czgbpf"/><path class="bol_ecc_z"/><path class="g8yxo7frq"/><path class="p0uohgbfj"/><path class="ljtt_kbno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:shortcake-1"} {...others} />);
}

export default Component;
