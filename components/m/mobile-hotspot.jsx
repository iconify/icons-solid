import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ytrn8zbfn.css';
import '../../css/h/hus16pvob.css';
import '../../css/h/h3wncwbtp.css';
import '../../css/q/qa6mp3bta.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="ytrn8zbfn"/><path class="hus16pvob"/><path class="h3wncwbtp"/><path class="qa6mp3bta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:mobile-hotspot"} {...others} />);
}

export default Component;
