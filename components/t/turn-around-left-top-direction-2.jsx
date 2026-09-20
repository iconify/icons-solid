import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/f-4zd1bop.css';
import '../../css/m/mtgm9_51k.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="f-4zd1bop"/><path class="mtgm9_51k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:turn-around-left-top-direction-2"} {...others} />);
}

export default Component;
