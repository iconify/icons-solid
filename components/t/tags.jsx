import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh28f4bjr.css';
import '../../css/d/dj02mebgr.css';
import '../../css/d/det45u12g.css';
import '../../css/v/v8vm98b1d.css';
import '../../css/o/ox3azgzzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vh28f4bjr"/><path class="dj02mebgr"/><path class="det45u12g"/><path class="v8vm98b1d"/><path class="ox3azgzzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tags"} {...others} />);
}

export default Component;
