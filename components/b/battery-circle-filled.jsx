import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/t/t5kuevs6k.css';
import '../../css/p/pgaah8bvy.css';
import '../../css/y/ypb3ww6cw.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGedK67dUX"><path class="k5-vjlrin"/><g transform="translate(3 3)" class="ivjvz2eii"><rect class="t5kuevs6k"/><path class="pgaah8bvy"/><path clip-rule="evenodd" class="ypb3ww6cw"/></g></mask></defs><circle mask="url(#SVGedK67dUX)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:battery-circle-filled"} {...others} />);
}

export default Component;
