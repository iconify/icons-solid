import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w9eox2blt.css';
import '../../css/m/m1siuiblp.css';
import '../../css/u/ueo3t_b4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w9eox2blt"/><path class="m1siuiblp"/><path class="ueo3t_b4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:accessories-retro-film-1"} {...others} />);
}

export default Component;
