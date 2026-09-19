import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e71vpenes.css';
import '../../css/p/pxwjowqap.css';
import '../../css/k/kf3vwpb8g.css';
import '../../css/s/s4uj_g5wj.css';
import '../../css/y/yhvmzbbvr.css';
import '../../css/n/n9bcbebbu.css';
import '../../css/x/xnk4glfvs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e71vpenes"/><path class="pxwjowqap"/><g class="kf3vwpb8g"><path class="s4uj_g5wj"/><path class="yhvmzbbvr"/></g><path class="n9bcbebbu"/><path class="xnk4glfvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:survey"} {...others} />);
}

export default Component;
