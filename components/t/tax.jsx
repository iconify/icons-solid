import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k6udp_bbs.css';
import '../../css/m/mhj4-pb9j.css';
import '../../css/b/bouips0cw.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="k6udp_bbs"/><path class="mhj4-pb9j"/><path class="bouips0cw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:tax"} {...others} />);
}

export default Component;
