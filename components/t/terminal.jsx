import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qag91yrff.css';
import '../../css/t/t_fa3jgak.css';
import '../../css/y/y13vlzbdh.css';
import '../../css/i/i19nlbcfg.css';
import '../../css/h/hi1nd6mvb.css';
import '../../css/m/mpx2z9bhn.css';
import '../../css/r/r1zxk5bwd.css';
import '../../css/k/kbev8ab8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qag91yrff wm-shadow"/><path class="t_fa3jgak wm-k"/><path class="wm-k y13vlzbdh"/><path class="i19nlbcfg wm-k"/><path class="hi1nd6mvb wm-k"/><path class="mpx2z9bhn wm-k"/><path class="r1zxk5bwd wm-shine"/><path class="kbev8ab8j wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:terminal"} {...others} />);
}

export default Component;
