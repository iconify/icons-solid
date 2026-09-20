import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/ulo0tsbay.css';
import '../../css/k/km1fdpbdv.css';
import '../../css/w/w4mn8hb8o.css';
import '../../css/r/rwwj8i_iv.css';
import '../../css/s/swqoqsywp.css';
import '../../css/c/cwk6upbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="ulo0tsbay"/><path class="km1fdpbdv"/><path class="w4mn8hb8o"/></g><path class="rwwj8i_iv"/><path class="swqoqsywp"/><path class="cwk6upbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:share-circle-bold-duotone"} {...others} />);
}

export default Component;
