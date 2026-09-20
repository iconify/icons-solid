import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rypcozb0t.css';
import '../../css/o/oqz9ysb-d.css';
import '../../css/r/r_b_s9bgt.css';
import '../../css/e/eodx_2bdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rypcozb0t"/><path class="oqz9ysb-d"/><path class="r_b_s9bgt"/><path class="eodx_2bdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:facebook-like"} {...others} />);
}

export default Component;
