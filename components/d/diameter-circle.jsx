import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q0ji0ybmf.css';
import '../../css/u/uf0xpq39d.css';
import '../../css/a/a4lo4k5_r.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="q0ji0ybmf"/><path class="uf0xpq39d"/><path class="a4lo4k5_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:diameter-circle"} {...others} />);
}

export default Component;
