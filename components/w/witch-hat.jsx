import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a7ntdsb8h.css';
import '../../css/i/iut4_7r3a.css';
import '../../css/a/ah3mzbcfx.css';
import '../../css/e/ey_w3tbdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a7ntdsb8h wm-k"/><path class="iut4_7r3a wm-s"/><path class="ah3mzbcfx"/><path class="ey_w3tbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:witch-hat"} {...others} />);
}

export default Component;
