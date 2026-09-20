import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f957wyv6r.css';
import '../../css/o/obnp_h36c.css';
import '../../css/d/dskvu9bov.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f957wyv6r"/><path class="obnp_h36c"/><path class="dskvu9bov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:office-stapler-1"} {...others} />);
}

export default Component;
