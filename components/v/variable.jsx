import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/al6oogb_n.css';
import '../../css/n/nd4hl2bah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="al6oogb_n"/><path class="nd4hl2bah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:variable"} {...others} />);
}

export default Component;
