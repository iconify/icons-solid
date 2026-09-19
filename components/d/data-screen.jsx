import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/smyfmwbao.css';
import '../../css/r/rotjrpbrk.css';
import '../../css/p/pcam0y89t.css';
import '../../css/d/d7xqisbuu.css';
import '../../css/b/bp9huxb3a.css';
import '../../css/i/ilogggznz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="smyfmwbao"/><path class="rotjrpbrk"/><path class="pcam0y89t"/><path class="d7xqisbuu"/><circle class="bp9huxb3a"/><circle class="ilogggznz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:data-screen"} {...others} />);
}

export default Component;
