import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ki4vmlb-h.css';
import '../../css/f/fqwam5hgk.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="cuyn6tgcc"><path class="ki4vmlb-h"/><path class="fqwam5hgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-tux"} {...others} />);
}

export default Component;
