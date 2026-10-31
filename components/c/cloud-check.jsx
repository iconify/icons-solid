import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mo1i-jbzy.css';
import '../../css/z/z0cvyq9kc.css';
import '../../css/v/vjaxozbzk.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/h/hpiziebpm.css';
import '../../css/a/akt4rcb5p.css';
import '../../css/y/yivy12p1i.css';
import '../../css/t/ty9r-1bap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mo1i-jbzy"/><path class="z0cvyq9kc"/><path class="vjaxozbzk wm-shine"/><path class="m2ebxhp-u wm-k"/><path class="hpiziebpm wm-s"/><path class="akt4rcb5p"/><path class="yivy12p1i"/><path class="ty9r-1bap wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud-check"} {...others} />);
}

export default Component;
