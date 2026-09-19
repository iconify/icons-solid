import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j2n-flbsn.css';
import '../../css/k/kp-38cbhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="key-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="j2n-flbsn"/><path class="kp-38cbhy"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:key-outline"} {...others} />);
}

export default Component;
