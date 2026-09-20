import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhrly3bdd.css';
import '../../css/k/kvlrl-m0z.css';
import '../../css/x/xobvij4rc.css';
import '../../css/j/jsuj6mb0s.css';
import '../../css/x/xjhrzz_pj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nhrly3bdd"/><path class="kvlrl-m0z"/><path class="xobvij4rc"/><path class="jsuj6mb0s"/><path class="xjhrzz_pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:macrumors"} {...others} />);
}

export default Component;
