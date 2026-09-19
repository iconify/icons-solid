import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fg7qoebth.css';
import '../../css/d/dm-23acjg.css';
import '../../css/q/quacmmdxz.css';
import '../../css/l/lsfoftbyd.css';
import '../../css/w/wumy6gb7o.css';
import '../../css/r/rcsln0q1b.css';
import '../../css/d/dyrp3tsfw.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fg7qoebth"/><path class="dm-23acjg"/><path class="quacmmdxz"/><path class="lsfoftbyd"/><path class="wumy6gb7o"/><path class="rcsln0q1b"/><path class="dyrp3tsfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:pn"} {...others} />);
}

export default Component;
