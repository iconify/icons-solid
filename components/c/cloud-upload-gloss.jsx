import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i1n-2lblk.css';
import '../../css/x/xzltmb76k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="i1n-2lblk wm-k"/><path class="wm-s xzltmb76k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-upload-gloss"} {...others} />);
}

export default Component;
