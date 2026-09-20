import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/s/slegk3slk.css';
import '../../css/s/s02d0qbow.css';
import '../../css/p/pcpc27ofz.css';
import '../../css/n/ngds8nbum.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGksHQpbfW"><path class="k5-vjlrin"/><g transform="translate(3 3)" class="ivjvz2eii"><path clip-rule="evenodd" class="slegk3slk"/><circle class="s02d0qbow"/><circle class="pcpc27ofz"/><circle class="ngds8nbum"/></g></mask></defs><circle mask="url(#SVGksHQpbfW)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:text-bubble-circle-filled"} {...others} />);
}

export default Component;
