import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/netsmeake.css';
import '../../css/u/u-k87dwdf.css';
import '../../css/x/xyixtmbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="netsmeake"/><path class="u-k87dwdf"/><path class="xyixtmbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:diabolo-off"} {...others} />);
}

export default Component;
