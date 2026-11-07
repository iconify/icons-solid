import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us2dmdbro.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/aiccwccoc.css';
import '../../css/z/z4k4l369c.css';
import '../../css/q/quyhy_dnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="us2dmdbro"/><g class="xtpeb-edw"><path class="aiccwccoc"/><path class="z4k4l369c"/><path class="quyhy_dnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-large-bold-duotone"} {...others} />);
}

export default Component;
