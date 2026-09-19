import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nsm3521eu.css';
import '../../css/m/muuc_mrlw.css';
import '../../css/z/zdxzh3btg.css';
import '../../css/a/a6_r71bql.css';
import '../../css/z/zaixidbam.css';
import '../../css/k/kmlhsdb3v.css';
import '../../css/l/l72am6s0n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nsm3521eu"/><path class="muuc_mrlw"/><path class="zdxzh3btg"/><path class="a6_r71bql"/><path class="zaixidbam"/><path class="kmlhsdb3v"/><path class="l72am6s0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:database-network-point"} {...others} />);
}

export default Component;
