import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bpvg1pb5f.css';
import '../../css/y/yog3n699b.css';
import '../../css/k/kp7kpfbku.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bpvg1pb5f"/><path class="yog3n699b"/><path class="kp7kpfbku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:human-resources-businessman"} {...others} />);
}

export default Component;
