import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9e5p0ztk.css';
import '../../css/r/rqy006bbg.css';
import '../../css/o/olncy78qd.css';
import '../../css/t/thpjzbb9p.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="p9e5p0ztk"/><path class="rqy006bbg"/><path class="olncy78qd"/><path class="thpjzbb9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:to"} {...others} />);
}

export default Component;
