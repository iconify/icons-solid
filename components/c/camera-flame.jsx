import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ylo6n1gfy.css';
import '../../css/q/qloronl4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ylo6n1gfy"/><path class="qloronl4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-flame"} {...others} />);
}

export default Component;
