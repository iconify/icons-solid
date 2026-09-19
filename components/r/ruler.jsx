import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/l43npobah.css';
import '../../css/k/kkvf0u9bw.css';
import '../../css/p/phjlrns3w.css';
import '../../css/w/wwaxu0b5w.css';
import '../../css/d/d0bsm62xt.css';
import '../../css/a/axpxhmb3a.css';
import '../../css/k/ku7irlc3d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="l43npobah"/><path class="kkvf0u9bw"/><path class="phjlrns3w"/><path class="wwaxu0b5w"/><path class="d0bsm62xt"/><path class="axpxhmb3a"/><path class="ku7irlc3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ruler"} {...others} />);
}

export default Component;
