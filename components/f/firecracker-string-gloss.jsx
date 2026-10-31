import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ofguzw4ec.css';
import '../../css/z/zwcjkvs-i.css';
import '../../css/f/f7q7occ5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ofguzw4ec wm-a"/><path class="wm-k zwcjkvs-i"/><path class="f7q7occ5e wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:firecracker-string-gloss"} {...others} />);
}

export default Component;
