import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pqc-sacjm.css';
import '../../css/r/rddy1mqff.css';
import '../../css/r/ra2r3_bak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pqc-sacjm"/><path class="rddy1mqff"/><path class="ra2r3_bak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:eye-closed"} {...others} />);
}

export default Component;
