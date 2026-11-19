import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kte9t6b2p.css';
import '../../css/c/cb977fdem.css';
import '../../css/k/k2nqfohtx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kte9t6b2p"/><path class="cb977fdem"/><path class="k2nqfohtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:phone-keyboard"} {...others} />);
}

export default Component;
