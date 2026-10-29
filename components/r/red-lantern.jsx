import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vtkkth74d.css';
import '../../css/v/vjsomnb_b.css';
import '../../css/r/r08jaibne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vtkkth74d"/><path class="vjsomnb_b"/><path class="r08jaibne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:red-lantern"} {...others} />);
}

export default Component;
