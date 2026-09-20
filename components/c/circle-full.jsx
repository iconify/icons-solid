import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tx_ah59as.css';
import '../../css/r/r_9ly7e1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tx_ah59as"/><path class="r_9ly7e1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-full"} {...others} />);
}

export default Component;
