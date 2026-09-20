import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3rlb1bhp.css';
import '../../css/r/r9_aabckq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x3rlb1bhp"/><path class="r9_aabckq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:heart-rate-monitor"} {...others} />);
}

export default Component;
