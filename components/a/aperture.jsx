import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dyk91zota.css';
import '../../css/c/cp4lmky5m.css';
import '../../css/k/khl_6qbmw.css';
import '../../css/j/jsr00m3kj.css';
import '../../css/w/wcj-r41ni.css';
import '../../css/e/er4khtape.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dyk91zota"/><path class="cp4lmky5m"/><path class="khl_6qbmw"/><path class="jsr00m3kj"/><path class="wcj-r41ni"/><path class="er4khtape"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:aperture"} {...others} />);
}

export default Component;
