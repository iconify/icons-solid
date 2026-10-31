import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v91ztpb9k.css';
import '../../css/j/jmxr2_b8j.css';
import '../../css/x/xj8w6jbrv.css';
import '../../css/t/trmmm4ugx.css';
import '../../css/t/t8-kmccci.css';
import '../../css/b/br7tftb9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v91ztpb9k wm-shadow"/><path class="jmxr2_b8j"/><path class="xj8w6jbrv"/><path class="trmmm4ugx"/><path class="t8-kmccci"/><path class="br7tftb9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-penguin"} {...others} />);
}

export default Component;
