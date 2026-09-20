import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/a/ajoemkl3n.css';
import '../../css/p/pj2wawb7v.css';
import '../../css/i/ikp8k8bfm.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGPJ0OKcUZ"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="ajoemkl3n"/><path class="pj2wawb7v"/><path class="ikp8k8bfm"/></g></mask></defs><circle mask="url(#SVGPJ0OKcUZ)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:text-bubbles-circle-filled"} {...others} />);
}

export default Component;
