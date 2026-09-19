import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qo5tdhb3o.css';
import '../../css/i/iyml-1f6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="videocam-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="qo5tdhb3o"/><path class="iyml-1f6i"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:videocam-outline"} {...others} />);
}

export default Component;
