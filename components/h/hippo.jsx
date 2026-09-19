import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rmctyr8ng.css';
import '../../css/w/wixtjizhe.css';
import '../../css/w/w904lvm1k.css';
import '../../css/a/aq1t7s2nx.css';
import '../../css/c/cu63mnb6h.css';
import '../../css/h/h4lclgb7y.css';
import '../../css/d/d3xeqw__t.css';
import '../../css/k/kbha-jbjv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="rmctyr8ng"/><circle class="wixtjizhe"/><circle class="w904lvm1k"/><path class="aq1t7s2nx"/><circle class="cu63mnb6h"/><circle class="h4lclgb7y"/><path class="d3xeqw__t"/><path class="kbha-jbjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hippo"} {...others} />);
}

export default Component;
