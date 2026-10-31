import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s72q8wbtp.css';
import '../../css/q/qf24h3b2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s72q8wbtp"/><path class="qf24h3b2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wine-duocolor-round"} {...others} />);
}

export default Component;
