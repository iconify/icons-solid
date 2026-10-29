import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qvdvgyb-q.css';
import '../../css/o/ohv8w-olz.css';
import '../../css/h/hsmjbytjh.css';
import '../../css/k/k35ok3k-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qvdvgyb-q wm-k"/><path class="ohv8w-olz wm-s"/><path class="hsmjbytjh"/><path class="k35ok3k-h wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-cog"} {...others} />);
}

export default Component;
