import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/v/vfos5tb7o.css';
import '../../css/j/jq5_0hbli.css';
import '../../css/o/oaibb5bto.css';
import '../../css/d/d0vp_pdhy.css';
import '../../css/v/vtziudbyh.css';
import '../../css/l/llh8ywnoi.css';
import '../../css/b/bnizsx3qe.css';
import '../../css/a/a-e4wabpd.css';
import '../../css/d/diokl8bdb.css';
import '../../css/h/h93xzk2yn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="vfos5tb7o"/><path class="jq5_0hbli"/><path class="oaibb5bto"/><path class="d0vp_pdhy"/><path class="vtziudbyh"/><path class="llh8ywnoi"/><path class="bnizsx3qe"/><path class="a-e4wabpd"/><path class="diokl8bdb"/><path class="h93xzk2yn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:timeline"} {...others} />);
}

export default Component;
