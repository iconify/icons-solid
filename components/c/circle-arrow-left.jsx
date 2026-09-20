import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tx_ah59as.css';
import '../../css/x/xw4_qbbkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tx_ah59as"/><path class="xw4_qbbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-arrow-left"} {...others} />);
}

export default Component;
