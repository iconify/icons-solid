import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lzea9cggi.css';
import '../../css/c/cw5fmb0dv.css';
import '../../css/c/caeqb-r8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lzea9cggi"/><path class="cw5fmb0dv"/><path class="caeqb-r8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:broken-smartphone-1"} {...others} />);
}

export default Component;
