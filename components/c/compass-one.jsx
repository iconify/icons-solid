import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/w/wfx6i99th.css';
import '../../css/b/bymjbi7gl.css';
import '../../css/k/kp_p81dna.css';
import '../../css/h/hhi1c2ovh.css';
import '../../css/i/i65omlbxy.css';
import '../../css/f/ft9vq6ben.css';
import '../../css/b/b2gz28-9b.css';
import '../../css/c/cymdk3-vj.css';
import '../../css/q/q2mkjo0az.css';
import '../../css/g/gm0_gfb5n.css';
import '../../css/x/xe19fdc3k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="wfx6i99th"/><path class="bymjbi7gl"/><path class="kp_p81dna"/><path class="hhi1c2ovh"/><path class="i65omlbxy"/><path class="ft9vq6ben"/><path class="b2gz28-9b"/><path class="cymdk3-vj"/><path class="q2mkjo0az"/><path class="gm0_gfb5n"/><path class="xe19fdc3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:compass-one"} {...others} />);
}

export default Component;
