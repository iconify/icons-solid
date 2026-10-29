import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jno5elkhk.css';
import '../../css/s/sj4gttbru.css';
import '../../css/z/zzq_n6u1v.css';
import '../../css/j/j3fsetb_v.css';
import '../../css/d/dnsnyubwt.css';
import '../../css/k/kdwu6r0sr.css';
import '../../css/k/kvq-el9_o.css';
import '../../css/h/hc4q5db8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jno5elkhk wm-shadow"/><path class="sj4gttbru wm-k"/><path class="wm-k zzq_n6u1v"/><path class="j3fsetb_v wm-k"/><path class="dnsnyubwt wm-k"/><path class="kdwu6r0sr wm-shine"/><path class="kvq-el9_o wm-k"/><path class="hc4q5db8e wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:circle-check-big"} {...others} />);
}

export default Component;
