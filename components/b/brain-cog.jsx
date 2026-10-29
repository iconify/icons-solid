import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vips7_p7i.css';
import '../../css/d/dnzybsk5m.css';
import '../../css/v/v71ayrbvi.css';
import '../../css/g/ghywisbpu.css';
import '../../css/e/ezpal-bxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vips7_p7i wm-k"/><path class="dnzybsk5m wm-s"/><path class="v71ayrbvi"/><path class="ghywisbpu"/><path class="ezpal-bxv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:brain-cog"} {...others} />);
}

export default Component;
