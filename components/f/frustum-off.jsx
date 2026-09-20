import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ufrhtcc_x.css';
import '../../css/m/myc-tnu3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ufrhtcc_x"/><path class="myc-tnu3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:frustum-off"} {...others} />);
}

export default Component;
