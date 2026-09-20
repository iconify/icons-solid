import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vkwwp42am.css';
import '../../css/b/bw4rmmbty.css';
import '../../css/n/nyyahnbxx.css';
import '../../css/b/byu9zgdxu.css';
import '../../css/e/eonjggvry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vkwwp42am"/><path class="bw4rmmbty"/><path class="nyyahnbxx"/><circle class="byu9zgdxu"/><path class="eonjggvry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-by-time-linear"} {...others} />);
}

export default Component;
