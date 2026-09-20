import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/l/l7q_6ridl.css';
import '../../css/e/e16i_vb0b.css';
import '../../css/w/wbc47kbeq.css';
import '../../css/w/w9c13nqou.css';
import '../../css/j/jmopay9mm.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGVGjoLbXz"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="l7q_6ridl"/><path clip-rule="evenodd" class="e16i_vb0b"/><path class="wbc47kbeq"/><path class="w9c13nqou"/><path class="jmopay9mm"/></g></mask></defs><circle mask="url(#SVGVGjoLbXz)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:coctail-circle-filled"} {...others} />);
}

export default Component;
