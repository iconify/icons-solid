import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ald82rf_n.css';
import '../../css/k/k8-wr-pvm.css';
import '../../css/n/nz0ig3adr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ald82rf_n"/><path class="k8-wr-pvm"/><path class="nz0ig3adr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:prisoner"} {...others} />);
}

export default Component;
