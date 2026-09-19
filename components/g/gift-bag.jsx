import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/a459j710d.css';
import '../../css/r/rkm-xfb-q.css';
import '../../css/p/ppcrud4jg.css';
import '../../css/t/t0-jhwb6f.css';
import '../../css/w/w2clp_a8v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="a459j710d"/><path class="rkm-xfb-q"/><circle class="ppcrud4jg"/><circle class="t0-jhwb6f"/><path class="w2clp_a8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gift-bag"} {...others} />);
}

export default Component;
