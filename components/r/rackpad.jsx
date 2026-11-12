import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgic1j72k.css';
import '../../css/p/pvghoxb6h.css';
import '../../css/g/gdrs0ny1c.css';
import '../../css/u/ujvzqip4o.css';
import '../../css/x/x3w4k13ld.css';
import '../../css/z/zxtgzqbpc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xgic1j72k"/><path class="pvghoxb6h"/><path class="gdrs0ny1c"/><path class="ujvzqip4o"/><path class="x3w4k13ld"/><path class="zxtgzqbpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rackpad"} {...others} />);
}

export default Component;
