import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/g4x10rber.css';
import '../../css/w/wzh204bze.css';
import '../../css/u/u3ijsnwem.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="g4x10rber"/><path class="wzh204bze"/><path class="u3ijsnwem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:wallet-money"} {...others} />);
}

export default Component;
