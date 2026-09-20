import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ep1475bim.css';
import '../../css/p/phdl06g0n.css';
import '../../css/n/nrpx-15tq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ep1475bim"/><path class="phdl06g0n"/><path class="nrpx-15tq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-toyota"} {...others} />);
}

export default Component;
