import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kh-prx2jc.css';
import '../../css/q/quf2x8v8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kh-prx2jc"/><path class="quf2x8v8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tiktok-duocolor-round"} {...others} />);
}

export default Component;
