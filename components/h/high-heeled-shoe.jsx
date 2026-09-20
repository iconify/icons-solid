import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt6-8gots.css';
import '../../css/x/xbsoibqea.css';
import '../../css/w/w0n-ygh8f.css';
import '../../css/u/ub_ew5wbc.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/k/khtp0tjmz.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGiRAjLcDQ" class="xt6-8gots"/></defs><path class="xbsoibqea"/><path class="w0n-ygh8f"/><path class="ub_ew5wbc"/><g class="jn8qy4bru"><path class="khtp0tjmz"/><use href="#SVGiRAjLcDQ"/><use href="#SVGiRAjLcDQ"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:high-heeled-shoe"} {...others} />);
}

export default Component;
