import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jn9wpbcya.css';
import '../../css/p/p31lbcbnb.css';
import '../../css/i/itpljo0rb.css';
import '../../css/t/twalh0rvl.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="jn9wpbcya"/><path class="p31lbcbnb"/><path class="itpljo0rb"/><path class="twalh0rvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:acrobatic-2"} {...others} />);
}

export default Component;
