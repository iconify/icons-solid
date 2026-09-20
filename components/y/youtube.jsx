import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/movj3iwhm.css';
import '../../css/r/rev0qgb7v.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/k/kpyumnb5c.css';
import '../../css/i/iahg22pun.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="movj3iwhm"/><path class="rev0qgb7v"/><g class="x8poo_bjf"><path class="kpyumnb5c"/><path class="iahg22pun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:youtube"} {...others} />);
}

export default Component;
