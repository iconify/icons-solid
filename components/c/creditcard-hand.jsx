import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lttnvhoqk.css';
import '../../css/l/lxa63q6am.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lttnvhoqk"/><path class="lxa63q6am"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:creditcard-hand"} {...others} />);
}

export default Component;
