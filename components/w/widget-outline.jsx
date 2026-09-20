import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b-p0nv5-g.css';
import '../../css/c/cu2b4ubwf.css';
import '../../css/e/e27jkeb4n.css';
import '../../css/h/hu3ol8b3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b-p0nv5-g"/><path class="cu2b4ubwf"/><path class="e27jkeb4n"/><path class="hu3ol8b3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-outline"} {...others} />);
}

export default Component;
