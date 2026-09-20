import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b3qz78bjj.css';
import '../../css/s/s4uu9jgsy.css';
import '../../css/u/uu__r-bso.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="b3qz78bjj"/><path class="s4uu9jgsy"/><path class="uu__r-bso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:wallet-money-3"} {...others} />);
}

export default Component;
