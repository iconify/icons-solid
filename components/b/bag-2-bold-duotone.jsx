import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1aff5b5g.css';
import '../../css/i/irw5v3uiq.css';
import '../../css/w/wwyuwacdr.css';
import '../../css/c/c2hja6b2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n1aff5b5g"/><path class="irw5v3uiq"/><path class="wwyuwacdr"/><path class="c2hja6b2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-2-bold-duotone"} {...others} />);
}

export default Component;
