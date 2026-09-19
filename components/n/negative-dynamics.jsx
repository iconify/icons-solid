import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/p/p0018ac6k.css';
import '../../css/c/c5449sbbc.css';
import '../../css/w/wu4hlbc_i.css';
import '../../css/p/pnoe_wbur.css';
import '../../css/z/zhyibvb1d.css';
import '../../css/z/zaf-y4bpn.css';
import '../../css/r/r4y3rzb6p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="p0018ac6k"/><path class="c5449sbbc"/><path class="wu4hlbc_i"/><path class="pnoe_wbur"/><path class="zhyibvb1d"/><path class="zaf-y4bpn"/><path class="r4y3rzb6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:negative-dynamics"} {...others} />);
}

export default Component;
