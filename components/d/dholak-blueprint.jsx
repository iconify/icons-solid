import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nvmxc-6yx.css';
import '../../css/r/ru7g1vbuy.css';
import '../../css/p/p1dck6zta.css';
import '../../css/b/bkzzmgbiy.css';
import '../../css/h/hlm3wm6_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nvmxc-6yx wm-deco"/><path class="ru7g1vbuy wm-deco"/><path class="p1dck6zta wm-k"/><path class="bkzzmgbiy wm-a"/><path class="hlm3wm6_m wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dholak-blueprint"} {...others} />);
}

export default Component;
