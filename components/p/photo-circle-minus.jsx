import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yp_mb0bvb.css';
import '../../css/w/w3ie_cv-x.css';
import '../../css/t/tu-453b3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yp_mb0bvb"/><path class="w3ie_cv-x"/><path class="tu-453b3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-circle-minus"} {...others} />);
}

export default Component;
