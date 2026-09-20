import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/ryc_4_24f.css';
import '../../css/j/j7mo58bub.css';
import '../../css/f/fws-n8mkg.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="ryc_4_24f"/><path class="j7mo58bub"/><path class="fws-n8mkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:search-alt-3"} {...others} />);
}

export default Component;
