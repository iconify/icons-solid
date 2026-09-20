import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t2ru60cbr.css';
import '../../css/k/kccg3k40n.css';
import '../../css/c/cg5b7tbik.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t2ru60cbr"/><path class="kccg3k40n"/><path class="cg5b7tbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:video-meeting-camera-browser"} {...others} />);
}

export default Component;
