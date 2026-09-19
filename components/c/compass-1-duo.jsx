import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7qxbnbvo.css';
import '../../css/d/dol-jyfgm.css';
import '../../css/k/k3cj--b3l.css';
import '../../css/g/g0_mboyku.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="z7qxbnbvo"/><path class="dol-jyfgm"/><path class="k3cj--b3l"/><path class="g0_mboyku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:compass-1-duo"} {...others} />);
}

export default Component;
