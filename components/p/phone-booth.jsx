import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kcf93oy9s.css';
import '../../css/o/oq8sdxb9s.css';
import '../../css/n/n4gns6qqw.css';
import '../../css/r/rejbcjb_e.css';
import '../../css/c/cvl851wrp.css';
import '../../css/k/kf1113i-t.css';
import '../../css/u/ua0kp4g6s.css';
import '../../css/w/w94kgrhdl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="kcf93oy9s"/><rect class="oq8sdxb9s"/><path class="n4gns6qqw"/><path class="rejbcjb_e"/><path class="cvl851wrp"/><path class="kf1113i-t"/><path class="ua0kp4g6s"/><path class="w94kgrhdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:phone-booth"} {...others} />);
}

export default Component;
