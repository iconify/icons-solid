import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acbazhg2y.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x8yw542mv.css';
import '../../css/f/fr0vjkbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGq7pbYcni" class="acbazhg2y"/></defs><g class="ft5dv1b6b"><use href="#SVGq7pbYcni" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGq7pbYcni" clip-rule="evenodd" class="d2kvgvbvc"/><path clip-rule="evenodd" class="x8yw542mv"/><path class="fr0vjkbsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:view-hide-duotone-line"} {...others} />);
}

export default Component;
