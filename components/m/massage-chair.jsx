import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xo4-_ebwm.css';
import '../../css/m/mqtn36b3h.css';
import '../../css/j/je_e_bb4h.css';
import '../../css/u/u_2yizbmf.css';
import '../../css/h/hecg8zguv.css';
import '../../css/k/k0wmzacqy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="xo4-_ebwm"/><path class="mqtn36b3h"/><path class="je_e_bb4h"/><path class="u_2yizbmf"/><path class="hecg8zguv"/><path class="k0wmzacqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:massage-chair"} {...others} />);
}

export default Component;
