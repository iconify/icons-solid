import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/k/k629u2bes.css';
import '../../css/g/gevghubni.css';
import '../../css/t/tmzxo5b8d.css';
import '../../css/y/yiw-o4b5t.css';
import '../../css/i/i8yiwjbfw.css';
import '../../css/s/smc-ix1hs.css';
import '../../css/u/u3e9omb0e.css';
import '../../css/n/nmorhybxr.css';
import '../../css/r/r93zmybav.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="k629u2bes"/><path class="gevghubni"/><path class="tmzxo5b8d"/><path class="yiw-o4b5t"/><path class="i8yiwjbfw"/><path class="smc-ix1hs"/><path class="u3e9omb0e"/><path class="nmorhybxr"/><path class="r93zmybav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cake-three"} {...others} />);
}

export default Component;
