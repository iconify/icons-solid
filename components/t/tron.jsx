import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z95-v_bqm.css';
import '../../css/s/s37988bmp.css';

const viewBox = {"width":201,"height":193};
const content = `<g class="ft5dv1b6b"><path class="z95-v_bqm"/><path class="s37988bmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tron"} {...others} />);
}

export default Component;
