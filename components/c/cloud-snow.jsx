import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-m-98b_p.css';
import '../../css/r/rs0wrok6f.css';
import '../../css/m/mc3p6_0qk.css';
import '../../css/j/jncdh4bhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h-m-98b_p"/><path class="rs0wrok6f"/><path class="mc3p6_0qk"/><path class="jncdh4bhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-snow"} {...others} />);
}

export default Component;
