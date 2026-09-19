import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/dl_ofsy9w.css';
import '../../css/s/sjb29en2p.css';
import '../../css/p/pytt3n7gc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="dl_ofsy9w"/><path class="sjb29en2p"/><path class="pytt3n7gc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:discount"} {...others} />);
}

export default Component;
