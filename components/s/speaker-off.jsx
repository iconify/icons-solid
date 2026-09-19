import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cay9w4bva.css';
import '../../css/d/dz2lb19zc.css';
import '../../css/a/ahgurpb-c.css';
import '../../css/b/b1n_z_e3z.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cay9w4bva"/><path class="dz2lb19zc"/><path class="ahgurpb-c"/><path class="b1n_z_e3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:speaker-off"} {...others} />);
}

export default Component;
