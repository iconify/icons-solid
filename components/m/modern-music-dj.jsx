import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fhc8vnbrf.css';
import '../../css/b/bbmrarjtx.css';
import '../../css/a/arwxpf80d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fhc8vnbrf"/><path class="bbmrarjtx"/><path class="arwxpf80d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:modern-music-dj"} {...others} />);
}

export default Component;
