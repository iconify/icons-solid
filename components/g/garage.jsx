import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/a/axr4_kmuy.css';
import '../../css/n/nu_7h7boi.css';
import '../../css/d/d2e2hv5ce.css';
import '../../css/o/oox4putxj.css';
import '../../css/r/rchor9blu.css';
import '../../css/k/kmcdnoalt.css';
import '../../css/z/zik-p7iom.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect class="axr4_kmuy"/><rect class="nu_7h7boi"/><path class="d2e2hv5ce"/><path class="oox4putxj"/><path class="rchor9blu"/><path class="kmcdnoalt"/><path class="zik-p7iom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:garage"} {...others} />);
}

export default Component;
