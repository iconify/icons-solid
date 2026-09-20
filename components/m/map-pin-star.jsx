import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uw5ylwu1y.css';
import '../../css/z/zk6fj2bpn.css';
import '../../css/p/pltckst1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uw5ylwu1y"/><path class="zk6fj2bpn"/><path class="pltckst1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:map-pin-star"} {...others} />);
}

export default Component;
