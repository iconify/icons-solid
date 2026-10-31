import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fwt-n_bej.css';
import '../../css/r/r8syq6nxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="fwt-n_bej wm-k"/><path class="r8syq6nxr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:reply-all-gloss"} {...others} />);
}

export default Component;
