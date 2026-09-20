import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/frvs39b5t.css';
import '../../css/k/k5ikzyb2n.css';
import '../../css/b/bv162rb1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="frvs39b5t"/><path class="k5ikzyb2n"/><path class="bv162rb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:traffic-economy-outline"} {...others} />);
}

export default Component;
