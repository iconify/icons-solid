import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d2jl40byv.css';
import '../../css/a/ap0ainbgu.css';
import '../../css/q/qjbrfgbcs.css';
import '../../css/o/op12o5rsd.css';
import '../../css/k/ka1uzeb2e.css';
import '../../css/p/pu11_4bri.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d2jl40byv"/><path class="ap0ainbgu"/><path class="qjbrfgbcs"/><path class="op12o5rsd"/><path class="ka1uzeb2e"/><path class="pu11_4bri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:upload-box-1"} {...others} />);
}

export default Component;
