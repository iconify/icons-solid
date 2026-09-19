import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h54a1dbvn.css';
import '../../css/k/kf_yp9bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="map-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="h54a1dbvn"/><path class="kf_yp9bvr"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:map-outline"} {...others} />);
}

export default Component;
