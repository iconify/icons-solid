import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nghk8zb8n.css';
import '../../css/o/og0h-6bbk.css';
import '../../css/g/gvo0yps6k.css';
import '../../css/p/pd9o5hd4o.css';
import '../../css/d/d0paz45tg.css';
import '../../css/o/ob564ubsz.css';
import '../../css/x/xohcb54ni.css';
import '../../css/y/yj2gnobco.css';
import '../../css/i/i70riqb6q.css';
import '../../css/a/a8nykjbpf.css';
import '../../css/z/zbmd1qban.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nghk8zb8n wm-shadow"/><path class="og0h-6bbk wm-a"/><path class="gvo0yps6k wm-k"/><path class="pd9o5hd4o wm-k"/><path class="d0paz45tg wm-k"/><path class="ob564ubsz wm-k"/><path class="wm-shine xohcb54ni"/><path class="wm-k yj2gnobco"/><path class="i70riqb6q wm-a"/><path class="a8nykjbpf wm-a"/><path class="wm-a zbmd1qban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:ban"} {...others} />);
}

export default Component;
