import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/aognim-rb.css';
import '../../css/e/ew3soe-eq.css';
import '../../css/u/ua-k4sbny.css';
import '../../css/v/v-izr4c3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="aognim-rb"/><path class="ew3soe-eq"/><path class="ua-k4sbny"/><path class="v-izr4c3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:calendar-heart"} {...others} />);
}

export default Component;
