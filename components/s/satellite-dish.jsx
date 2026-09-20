import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c4e4_ybxm.css';
import '../../css/s/stxxa3bsa.css';
import '../../css/j/j2ya8sb9b.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="c4e4_ybxm"/><path class="stxxa3bsa"/><path class="j2ya8sb9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:satellite-dish"} {...others} />);
}

export default Component;
