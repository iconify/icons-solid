import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xeyn0hbmx.css';
import '../../css/z/zm4gp_b_k.css';
import '../../css/b/bd526db5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xeyn0hbmx"/><path class="zm4gp_b_k"/><path class="bd526db5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:volcano"} {...others} />);
}

export default Component;
