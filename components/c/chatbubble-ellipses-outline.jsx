import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exfxnbbze.css';
import '../../css/p/p1-cy4b1w.css';
import '../../css/a/a1bg4hbvb.css';
import '../../css/h/hv1t0udsq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="exfxnbbze"/><circle class="p1-cy4b1w"/><circle class="a1bg4hbvb"/><circle class="hv1t0udsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:chatbubble-ellipses-outline"} {...others} />);
}

export default Component;
