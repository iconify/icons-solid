import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu97-bc-y.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xnzk_khna.css';
import '../../css/y/ymg8cfbty.css';
import '../../css/o/o2u9bmxnq.css';
import '../../css/w/ws70kbb5m.css';
import '../../css/s/sewkneb2c.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cu97-bc-y"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g clip-rule="evenodd" mask="url(#SVGcFaS5cXn)" class="d2kvgvbvc"><path class="xnzk_khna"/><path class="ymg8cfbty"/></g><path clip-rule="evenodd" class="o2u9bmxnq"/><mask id="SVGSwf11cUQ" width="20" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="ws70kbb5m"/></mask><g mask="url(#SVGSwf11cUQ)"><path clip-rule="evenodd" class="sewkneb2c"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:jo"} {...others} />);
}

export default Component;
