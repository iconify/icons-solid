import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_lggdbfm.css';
import '../../css/t/tx2ft5brl.css';
import '../../css/p/piwafmb9b.css';
import '../../css/c/c5eoa18_o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j_lggdbfm"/><path class="tx2ft5brl"/><path class="piwafmb9b"/><path class="c5eoa18_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:vespa-duo"} {...others} />);
}

export default Component;
