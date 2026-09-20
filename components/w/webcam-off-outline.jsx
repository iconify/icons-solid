import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6yptrb_l.css';
import '../../css/d/de1mqwb_h.css';
import '../../css/g/gsgqssvbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="h6yptrb_l"/><path clip-rule="evenodd" class="de1mqwb_h"/><path class="gsgqssvbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:webcam-off-outline"} {...others} />);
}

export default Component;
