import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jx7j-sbmy.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/d/da5rk30-k.css';
import '../../css/k/k5es8f68i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jx7j-sbmy wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="da5rk30-k wm-k"/><path class="k5es8f68i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wallet-cards-blueprint"} {...others} />);
}

export default Component;
