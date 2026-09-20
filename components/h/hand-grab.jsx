import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pqiy-tb2f.css';
import '../../css/h/hc_yl3bdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pqiy-tb2f"/><path class="hc_yl3bdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hand-grab"} {...others} />);
}

export default Component;
