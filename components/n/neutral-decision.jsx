import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7h9xac7h.css';
import '../../css/t/tg13ssbpj.css';
import '../../css/s/sccr_db_u.css';
import '../../css/r/rl9h0kgcw.css';
import '../../css/d/dxret8b4s.css';
import '../../css/b/bvkc79bpm.css';
import '../../css/a/adl4jp3pw.css';
import '../../css/s/shd9kcczq.css';
import '../../css/o/ou5gtwb5g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a7h9xac7h"><circle class="tg13ssbpj"/><circle class="sccr_db_u"/><path class="rl9h0kgcw"/><path class="dxret8b4s"/></g><g class="bvkc79bpm"><circle class="adl4jp3pw"/><circle class="shd9kcczq"/><circle class="ou5gtwb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:neutral-decision"} {...others} />);
}

export default Component;
