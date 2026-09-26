import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/elj2386lt.css';
import '../../css/a/ajxy9c62r.css';
import '../../css/i/ist54rbfb.css';
import '../../css/p/p1oh4ubnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="elj2386lt"/><path class="ajxy9c62r"/><path class="ist54rbfb"/><path class="p1oh4ubnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-horizontal-broken"} {...others} />);
}

export default Component;
