import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h477q4bel.css';
import '../../css/j/je9pe87ui.css';
import '../../css/k/kek38hw4x.css';
import '../../css/z/z__g5t12m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h477q4bel"/><path class="je9pe87ui"/><path class="kek38hw4x"/><path class="z__g5t12m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-library-2-linear"} {...others} />);
}

export default Component;
