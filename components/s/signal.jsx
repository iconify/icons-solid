import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uwgbxybqk.css';
import '../../css/u/u77epz48j.css';
import '../../css/p/po-4i2jlq.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="uwgbxybqk"/><path class="u77epz48j"/><path class="po-4i2jlq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:signal"} {...others} />);
}

export default Component;
