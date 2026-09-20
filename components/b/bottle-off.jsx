import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bm1pdl_ir.css';
import '../../css/m/me-pg4phm.css';
import '../../css/t/treh5uvrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bm1pdl_ir"/><path class="me-pg4phm"/><path class="treh5uvrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bottle-off"} {...others} />);
}

export default Component;
