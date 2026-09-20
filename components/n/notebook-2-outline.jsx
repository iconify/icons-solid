import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n6y02tb2f.css';
import '../../css/f/fyvqt1pdf.css';
import '../../css/s/soh-f4tar.css';
import '../../css/o/o9q7sacyd.css';
import '../../css/r/rh8fn_wwa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n6y02tb2f"/><path class="fyvqt1pdf"/><path class="soh-f4tar"/><path class="o9q7sacyd"/><path clip-rule="evenodd" class="rh8fn_wwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-2-outline"} {...others} />);
}

export default Component;
