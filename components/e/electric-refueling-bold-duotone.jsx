import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zgi_c5ktu.css';
import '../../css/l/l2i7kkj8v.css';
import '../../css/b/bog-urfgt.css';
import '../../css/s/ste5mp1ha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zgi_c5ktu"/><path class="l2i7kkj8v"/><path class="bog-urfgt"/><path class="ste5mp1ha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:electric-refueling-bold-duotone"} {...others} />);
}

export default Component;
