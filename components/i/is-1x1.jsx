import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju-jy_b8z.css';
import '../../css/s/sx_geyq0r.css';
import '../../css/e/e6oabcccq.css';
import '../../css/b/b-u1zwncm.css';
import '../../css/x/x9ifspt2k.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGZDnmycqd"><path class="ju-jy_b8z"/></clipPath></defs><g clip-path="url(#SVGZDnmycqd)" transform="translate(-90)scale(1.0535)" class="sx_geyq0r"><path class="e6oabcccq"/><path class="b-u1zwncm"/><path class="x9ifspt2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:is-1x1"} {...others} />);
}

export default Component;
