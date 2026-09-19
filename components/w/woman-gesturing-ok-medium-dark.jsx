import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yuid-i-7w.css';
import '../../css/c/c--ikebre.css';
import '../../css/p/pgw0gv9gs.css';
import '../../css/k/kuszj-b8d.css';
import '../../css/g/ghroefbcy.css';
import '../../css/f/f_9kabc9e.css';
import '../../css/n/nbilqhbgd.css';
import '../../css/f/flgzy5blg.css';
import '../../css/n/nwvo-acjm.css';
import '../../css/y/yzcdlrzci.css';
import '../../css/j/j7qd3fb5t.css';
import '../../css/k/ktp1kmb6k.css';
import '../../css/o/oursy_o0a.css';
import '../../css/b/bjl25abwb.css';
import '../../css/b/bkxhvhlqn.css';
import '../../css/p/pu5-1dnsq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yuid-i-7w"/><path class="c--ikebre"/><path class="pgw0gv9gs"/><path class="kuszj-b8d"/><path class="ghroefbcy"/><path class="f_9kabc9e"/><path class="nbilqhbgd"/><path class="flgzy5blg"/><path class="nwvo-acjm"/><path class="yzcdlrzci"/><path class="j7qd3fb5t"/><path class="ktp1kmb6k"/><path class="oursy_o0a"/><path class="bjl25abwb"/><path class="bkxhvhlqn"/><path class="pu5-1dnsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-gesturing-ok-medium-dark"} {...others} />);
}

export default Component;
