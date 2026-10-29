import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xow0zcb0r.css';
import '../../css/t/t32tg997g.css';
import '../../css/k/ku6q6_xui.css';
import '../../css/u/uwldxv39u.css';
import '../../css/l/lqllpubnn.css';
import '../../css/e/ecxhesbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xow0zcb0r"/><path class="t32tg997g wm-deco"/><path class="ku6q6_xui wm-deco"/><path class="uwldxv39u wm-k"/><path class="lqllpubnn wm-s"/><path class="ecxhesbwt wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-x-blueprint"} {...others} />);
}

export default Component;
