import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/a/aeo0j_bhm.css';
import '../../css/h/h3alimzbv.css';
import '../../css/r/rgb8ipf3g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="aeo0j_bhm"/><path class="h3alimzbv"/><path class="rgb8ipf3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bars-offset-1"} {...others} />);
}

export default Component;
