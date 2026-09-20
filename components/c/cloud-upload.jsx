import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cjzp_bc2p.css';
import '../../css/d/dtuajbe-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cjzp_bc2p"/><path class="dtuajbe-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cloud-upload"} {...others} />);
}

export default Component;
