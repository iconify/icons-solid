import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/p/p309szbyn.css';
import '../../css/q/qjunyybpn.css';
import '../../css/j/jq3ltpbcw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="p309szbyn"/><path class="qjunyybpn"/><path class="jq3ltpbcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hot-pot-one"} {...others} />);
}

export default Component;
