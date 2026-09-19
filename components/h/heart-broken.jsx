import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orxt2w0nn.css';
import '../../css/y/ys2g1yc6p.css';
import '../../css/n/n4j_19b4a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="orxt2w0nn"/><path class="ys2g1yc6p"/><path class="n4j_19b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:heart-broken"} {...others} />);
}

export default Component;
