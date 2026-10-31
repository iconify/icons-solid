import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qbbfq9kyc.css';
import '../../css/b/bfdr36f3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qbbfq9kyc"/><path class="bfdr36f3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:syringe-duocolor-round"} {...others} />);
}

export default Component;
