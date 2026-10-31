import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eba0prbjj.css';
import '../../css/q/qmj5syb0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eba0prbjj"/><path class="qmj5syb0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ruler-duocolor-round"} {...others} />);
}

export default Component;
