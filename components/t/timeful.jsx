import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx2dlcbtb.css';
import '../../css/n/nh52vg31c.css';
import '../../css/a/aewgabcrd.css';
import '../../css/n/nq-623bsk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hx2dlcbtb"/><path class="nh52vg31c"/><path class="aewgabcrd"/><path class="nq-623bsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:timeful"} {...others} />);
}

export default Component;
