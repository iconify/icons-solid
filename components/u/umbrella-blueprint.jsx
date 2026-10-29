import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/quk27zbyr.css';
import '../../css/x/x0ui5_bui.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/r/r5b83pa5x.css';
import '../../css/s/s43cixb_t.css';
import '../../css/b/bukqgsbpj.css';
import '../../css/l/l00vc-b5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="quk27zbyr wm-deco"/><path class="wm-deco x0ui5_bui"/><path class="cf3uzcrzx wm-deco"/><path class="r5b83pa5x wm-k"/><path class="s43cixb_t wm-a"/><path class="bukqgsbpj wm-k"/><path class="l00vc-b5m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:umbrella-blueprint"} {...others} />);
}

export default Component;
