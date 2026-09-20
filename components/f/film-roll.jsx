import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u4x2a8b0d.css';
import '../../css/s/sbq63mboe.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="u4x2a8b0d"/><path class="sbq63mboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:film-roll"} {...others} />);
}

export default Component;
