import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t58456njl.css';
import '../../css/p/ptvu1u_4n.css';
import '../../css/s/ssdl_vbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t58456njl"/><circle class="ptvu1u_4n"/><path class="ssdl_vbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-pinned"} {...others} />);
}

export default Component;
