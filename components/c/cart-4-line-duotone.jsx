import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bspj2u0td.css';
import '../../css/j/jcgk1oq8u.css';
import '../../css/e/ez9s5bbgy.css';
import '../../css/j/jwuxyw18e.css';
import '../../css/p/p4wackbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bspj2u0td"/><path class="jcgk1oq8u"/><path class="ez9s5bbgy"/><path class="jwuxyw18e"/><path class="p4wackbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-4-line-duotone"} {...others} />);
}

export default Component;
