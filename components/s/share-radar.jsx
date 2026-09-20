import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/erodw14qe.css';
import '../../css/f/fdppbsbnc.css';
import '../../css/m/mbttp5b2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="erodw14qe"/><path class="fdppbsbnc"/><path class="mbttp5b2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:share-radar"} {...others} />);
}

export default Component;
