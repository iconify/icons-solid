import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/cwz9o0b_a.css';
import '../../css/v/vckr9t-fv.css';
import '../../css/a/aij65i-1v.css';
import '../../css/v/v6srrtb_d.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="cwz9o0b_a"/><path class="vckr9t-fv"/><path class="aij65i-1v"/><path class="v6srrtb_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:save-error-left"} {...others} />);
}

export default Component;
