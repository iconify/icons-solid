import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k4lkvubxf.css';
import '../../css/d/d_24e-4kv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="k4lkvubxf wm-k"/><path class="d_24e-4kv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:projector-gloss"} {...others} />);
}

export default Component;
