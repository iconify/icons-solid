import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/p/poywaoygi.css';
import '../../css/r/ry2qzlfsr.css';
import '../../css/g/g4hvem0_y.css';
import '../../css/e/eccn1rr2t.css';
import '../../css/g/gju1qnoqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="poywaoygi"/><path class="ry2qzlfsr"/></g><path class="g4hvem0_y"/><path class="eccn1rr2t"/><path class="gju1qnoqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-3-bold-duotone"} {...others} />);
}

export default Component;
