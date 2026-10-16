import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxmg0hb1o.css';
import '../../css/g/ghowvhihi.css';
import '../../css/x/xzn7dutzy.css';
import '../../css/s/ss8o3bc4m.css';
import '../../css/m/mdg9jabxs.css';

const viewBox = {"width":1080,"height":1218.5};
const content = `<path class="cxmg0hb1o"/><path class="ghowvhihi"/><path class="xzn7dutzy"/><path class="ss8o3bc4m"/><path class="mdg9jabxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:arbitrum"} {...others} />);
}

export default Component;
