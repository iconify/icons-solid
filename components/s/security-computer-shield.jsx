import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m083ykboc.css';
import '../../css/n/nqpxdtb1o.css';
import '../../css/h/hptpef2-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m083ykboc"/><path class="nqpxdtb1o"/><path class="hptpef2-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:security-computer-shield"} {...others} />);
}

export default Component;
