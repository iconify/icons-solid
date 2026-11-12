import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/raj4z-pfe.css';
import '../../css/l/lx0j_nfbx.css';
import '../../css/i/iyxxnubym.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="raj4z-pfe"/><path class="lx0j_nfbx"/><path class="iyxxnubym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:invoiceplane-light"} {...others} />);
}

export default Component;
