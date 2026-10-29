import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uyww4ontp.css';
import '../../css/x/xyui1mbhy.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/q/q01kz0ugr.css';
import '../../css/v/v-dzpkwlt.css';
import '../../css/b/b9j7mod-z.css';
import '../../css/h/heib1vo1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="uyww4ontp wm-deco"/><path class="wm-deco xyui1mbhy"/><path class="cf3uzcrzx wm-deco"/><path class="q01kz0ugr wm-k"/><path class="v-dzpkwlt wm-a"/><path class="b9j7mod-z wm-s"/><path class="heib1vo1o wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-check-blueprint"} {...others} />);
}

export default Component;
