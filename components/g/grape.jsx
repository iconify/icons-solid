import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vl_udub0j.css';
import '../../css/i/i-uboqb4e.css';
import '../../css/m/mywoygpuk.css';
import '../../css/s/syie46eid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vl_udub0j"/><path class="i-uboqb4e"/><path class="mywoygpuk"/><path class="syie46eid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:grape"} {...others} />);
}

export default Component;
