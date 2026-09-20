import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/u/uywub-ufe.css';
import '../../css/w/w7fovr0nc.css';
import '../../css/m/mc9svhpgr.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGwwQwYbMF"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="uywub-ufe"/><path class="w7fovr0nc"/><path class="mc9svhpgr"/></g></mask></defs><circle mask="url(#SVGwwQwYbMF)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrow-spin-circle-filled"} {...others} />);
}

export default Component;
