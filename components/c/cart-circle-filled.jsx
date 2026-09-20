import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/k/khiaq02ik.css';
import '../../css/b/boc9s-fhp.css';
import '../../css/b/b4dmablfp.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG89QY2byJ"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="khiaq02ik"/><path clip-rule="evenodd" class="boc9s-fhp"/><path class="b4dmablfp"/></g></mask></defs><circle mask="url(#SVG89QY2byJ)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:cart-circle-filled"} {...others} />);
}

export default Component;
