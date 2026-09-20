import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/j/j2qmstbqm.css';
import '../../css/f/fabrggbzi.css';
import '../../css/h/h0vor2f9a.css';
import '../../css/x/x7o6l7jax.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG6GkL7NhP"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="j2qmstbqm"/><path clip-rule="evenodd" class="fabrggbzi"/><path class="h0vor2f9a"/><path class="x7o6l7jax"/></g></mask></defs><circle mask="url(#SVG6GkL7NhP)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:can-circle-filled"} {...others} />);
}

export default Component;
