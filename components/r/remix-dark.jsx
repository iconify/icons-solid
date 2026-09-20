import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjo3wbrwo.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ij37156fo.css';
import '../../css/b/bbld177ls.css';

const viewBox = {"width":256,"height":256};
const content = `<defs><path id="SVGxXTqGcUX" class="pjo3wbrwo"/></defs><g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><use href="#SVGxXTqGcUX" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGxXTqGcUX" clip-rule="evenodd" class="d2kvgvbvc"/><path class="ij37156fo"/><path class="bbld177ls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:remix-dark"} {...others} />);
}

export default Component;
