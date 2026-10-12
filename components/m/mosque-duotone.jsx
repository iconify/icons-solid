import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvjmn1d_n.css';
import '../../css/b/bif3_hg0k.css';
import '../../css/w/wh4w-7b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pvjmn1d_n"/><path class="bif3_hg0k"/><path class="wh4w-7b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mosque-duotone"} {...others} />);
}

export default Component;
