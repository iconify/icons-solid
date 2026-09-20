import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kk12hpzil.css';
import '../../css/y/yx47hfbsa.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="kk12hpzil"/><path class="yx47hfbsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:price-tag"} {...others} />);
}

export default Component;
