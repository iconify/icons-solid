import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/y/y3hdwhbki.css';
import '../../css/k/k4nwofblt.css';
import '../../css/i/igsz1h3qd.css';
import '../../css/v/vwqeg9bup.css';
import '../../css/c/cwzlrubce.css';
import '../../css/a/afzfkqbcy.css';
import '../../css/m/mkhufkrbp.css';
import '../../css/v/vckgq5skn.css';
import '../../css/k/kdh834bxq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="y3hdwhbki"/><path class="k4nwofblt"/><path class="igsz1h3qd"/><path class="vwqeg9bup"/><rect class="cwzlrubce"/><path class="afzfkqbcy"/><path class="mkhufkrbp"/><ellipse class="vckgq5skn"/><path class="kdh834bxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-doc"} {...others} />);
}

export default Component;
