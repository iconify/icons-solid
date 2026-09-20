import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zooed6k3e.css';
import '../../css/u/u1jf1xrka.css';
import '../../css/d/dz1zod9hv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zooed6k3e"/><path class="u1jf1xrka"/><path class="dz1zod9hv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:volleyball-duotone"} {...others} />);
}

export default Component;
