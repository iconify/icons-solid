import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/of11ip22h.css';
import '../../css/k/krmb5paif.css';
import '../../css/t/tv7d2q0_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="of11ip22h wm-k"/><path class="krmb5paif wm-a"/><path class="tv7d2q0_i wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:airplay"} {...others} />);
}

export default Component;
