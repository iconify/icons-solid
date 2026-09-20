import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ngc21ykgs.css';
import '../../css/b/b61wf3bnd.css';
import '../../css/d/didkhtbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ngc21ykgs"/><path class="b61wf3bnd"/><path class="didkhtbvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:memory-sd-card-check"} {...others} />);
}

export default Component;
