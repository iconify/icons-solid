import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/brgx0gbyk.css';
import '../../css/f/fuprorb1g.css';
import '../../css/u/u0ck9yb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="brgx0gbyk"/><path class="fuprorb1g"/><path class="u0ck9yb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-unlock-broken"} {...others} />);
}

export default Component;
