import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kumiev7uk.css';
import '../../css/w/w_t3-ablg.css';
import '../../css/g/gtqpqib-h.css';
import '../../css/w/wufmk3pwa.css';
import '../../css/a/a9zymwbnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-16.058 58.734 -1.187)skewX(-.252)" class="kumiev7uk"/><rect transform="matrix(-.96098 -.27661 -.27239 .96219 21.68 9.47)" class="w_t3-ablg"/><rect transform="rotate(-16.058 42.39 3.196)skewX(-.252)" class="gtqpqib-h"/><rect transform="matrix(-.96098 -.27661 -.27239 .96219 23.24 5.96)" class="wufmk3pwa"/><path class="a9zymwbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tablets"} {...others} />);
}

export default Component;
