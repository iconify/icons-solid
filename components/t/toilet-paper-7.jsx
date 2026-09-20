import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/twphzohwo.css';
import '../../css/v/vm0d8dxzv.css';
import '../../css/t/te0t9wbba.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="twphzohwo"/><path class="vm0d8dxzv"/><path class="te0t9wbba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:toilet-paper-7"} {...others} />);
}

export default Component;
