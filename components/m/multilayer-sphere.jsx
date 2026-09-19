import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/o/oci273bgs.css';
import '../../css/u/uex591jtp.css';
import '../../css/v/vwqpu8-pk.css';
import '../../css/w/wx-byxo_q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><circle class="kb9zbkb1z"/><path class="oci273bgs"/><path class="uex591jtp"/><path class="vwqpu8-pk"/><path class="wx-byxo_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:multilayer-sphere"} {...others} />);
}

export default Component;
