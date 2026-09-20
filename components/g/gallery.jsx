import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hyyy7-loz.css';
import '../../css/q/q40tv3wii.css';
import '../../css/w/wn7ercind.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="hyyy7-loz"/><path class="q40tv3wii"/><path class="wn7ercind"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:gallery"} {...others} />);
}

export default Component;
