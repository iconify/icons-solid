import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy6v7eb4r.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ufxtsac0h.css';
import '../../css/p/pvhnjlbuv.css';
import '../../css/i/ijfm1xrqi.css';
import '../../css/u/uxgbmib5c.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)" class="d2kvgvbvc"><path class="ufxtsac0h"/><path class="pvhnjlbuv"/><path class="ijfm1xrqi"/><path class="uxgbmib5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:er-1x1"} {...others} />);
}

export default Component;
