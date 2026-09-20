import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k2j4asbpi.css';
import '../../css/c/chja7twbz.css';
import '../../css/w/wglt83b5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k2j4asbpi"/><path class="chja7twbz"/><path class="wglt83b5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layers-broken"} {...others} />);
}

export default Component;
