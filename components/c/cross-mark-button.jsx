import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf7voj8ls.css';
import '../../css/y/ygu8ifd-f.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/w/wn-_rqbea.css';
import '../../css/u/u3kyoh3ye.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nf7voj8ls"/><path class="ygu8ifd-f"/><g class="ij2x_72vy"><path class="wn-_rqbea"/><path class="u3kyoh3ye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cross-mark-button"} {...others} />);
}

export default Component;
