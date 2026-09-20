import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tahwntbjw.css';
import '../../css/t/tmk6wbi2k.css';
import '../../css/w/ws5njkb9a.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="tahwntbjw"/><path class="tmk6wbi2k"/><path class="ws5njkb9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:chart-line-alt-1"} {...others} />);
}

export default Component;
