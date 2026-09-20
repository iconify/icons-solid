import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xr1hsibvs.css';
import '../../css/d/d0kc6ebea.css';
import '../../css/s/samxracju.css';
import '../../css/j/jbvwddcpr.css';
import '../../css/w/w7j-do74d.css';
import '../../css/o/o9gvnyizs.css';
import '../../css/b/bioeuxb5e.css';

const viewBox = {"width":86.59,"height":19.638};
const content = `<defs><clipPath id="SVGE8pJhcqZ" clipPathUnits="userSpaceOnUse"><path class="xr1hsibvs"/></clipPath></defs><g clip-path="url(#SVGE8pJhcqZ)" transform="matrix(.48596 0 0 -.48596 .1 19.538)"><path class="d0kc6ebea"/><path class="samxracju"/><path class="jbvwddcpr"/><path class="w7j-do74d"/><path class="o9gvnyizs"/><path class="bioeuxb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:coupang"} {...others} />);
}

export default Component;
