import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/w/w6ss4accp.css';
import '../../css/j/jnn7bgbxn.css';
import '../../css/h/h1c5pezal.css';
import '../../css/v/v05q4lmkt.css';
import '../../css/k/kfix1ybbw.css';
import '../../css/b/bwob3ob7c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="w6ss4accp"/><rect class="jnn7bgbxn"/><path class="h1c5pezal"/><path class="v05q4lmkt"/><path class="kfix1ybbw"/><path class="bwob3ob7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:financing-two"} {...others} />);
}

export default Component;
