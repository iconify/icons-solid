import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nnef3pbai.css';
import '../../css/y/yb9ar3brw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="nnef3pbai wm-k"/><path class="wm-s yb9ar3brw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:champagne-toast-gloss"} {...others} />);
}

export default Component;
