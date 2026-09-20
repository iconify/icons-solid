import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ekm_tyd2k.css';
import '../../css/e/eam0xdz_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ekm_tyd2k"/><path class="eam0xdz_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:octahedron"} {...others} />);
}

export default Component;
