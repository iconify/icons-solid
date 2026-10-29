import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gvr7db0qu.css';
import '../../css/n/nmo7-m03s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="gvr7db0qu"/><path class="nmo7-m03s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gold-ingot-solid"} {...others} />);
}

export default Component;
