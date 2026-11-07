import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/poywaoygi.css';
import '../../css/r/ry2qzlfsr.css';
import '../../css/t/t8urrab6w.css';
import '../../css/v/vdofm9b_y.css';
import '../../css/g/gdpz3cccs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="poywaoygi"/><path class="ry2qzlfsr"/></g><path class="t8urrab6w"/><path class="vdofm9b_y"/><path class="gdpz3cccs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-3-bold-duotone"} {...others} />);
}

export default Component;
