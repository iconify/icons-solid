import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_lggdbfm.css';
import '../../css/c/cic4ebb1d.css';
import '../../css/r/rc95yo8es.css';
import '../../css/t/t3zt54bff.css';
import '../../css/x/x8mod26-m.css';
import '../../css/r/r0ordq-3d.css';
import '../../css/l/li45oqbpf.css';
import '../../css/o/ogeubusjg.css';
import '../../css/t/twguo0b3l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j_lggdbfm"/><path class="cic4ebb1d"/><path clip-rule="evenodd" class="rc95yo8es"/><path clip-rule="evenodd" class="t3zt54bff"/><path class="x8mod26-m"/><path class="r0ordq-3d"/><path class="li45oqbpf"/><path class="ogeubusjg"/><path clip-rule="evenodd" class="twguo0b3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:urban-woman-duo"} {...others} />);
}

export default Component;
