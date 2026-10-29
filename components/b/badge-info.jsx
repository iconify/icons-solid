import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s24ketb5h.css';
import '../../css/e/evm-n6jed.css';
import '../../css/c/cizokmwru.css';
import '../../css/q/qsyc7c1wq.css';
import '../../css/h/hpd02p5nf.css';
import '../../css/f/f-t35etsg.css';
import '../../css/g/gfo3g8bdq.css';
import '../../css/o/oy8ef5byr.css';
import '../../css/o/orex36ets.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s24ketb5h wm-shadow"/><path class="evm-n6jed wm-k"/><path class="cizokmwru wm-k"/><path class="qsyc7c1wq wm-k"/><path class="hpd02p5nf wm-k"/><path class="f-t35etsg wm-k"/><path class="gfo3g8bdq wm-shine"/><path class="oy8ef5byr wm-k"/><path class="orex36ets wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:badge-info"} {...others} />);
}

export default Component;
