import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x9_ahjb7j.css';
import '../../css/y/y7b58vpdl.css';
import '../../css/d/dvu_-ub0c.css';
import '../../css/b/b8xca3bfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x9_ahjb7j"/><path class="y7b58vpdl"/><path class="dvu_-ub0c"/><path class="b8xca3bfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cd-disc"} {...others} />);
}

export default Component;
