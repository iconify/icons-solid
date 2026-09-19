import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nn4_--rny.css';
import '../../css/r/rgsc31bsl.css';
import '../../css/f/f40xm6t9h.css';
import '../../css/c/cpf13_b4e.css';
import '../../css/w/wwowutbfr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="nn4_--rny"/><path class="rgsc31bsl"/><path class="f40xm6t9h"/><circle class="cpf13_b4e"/><circle class="wwowutbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:makeups"} {...others} />);
}

export default Component;
