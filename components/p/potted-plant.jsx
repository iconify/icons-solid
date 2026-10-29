import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tohe7yk2s.css';
import '../../css/c/c2zvxtbqs.css';
import '../../css/m/mtghfpb3k.css';
import '../../css/d/dg2f36b_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tohe7yk2s wm-k"/><path class="c2zvxtbqs wm-a"/><path class="mtghfpb3k"/><path class="dg2f36b_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:potted-plant"} {...others} />);
}

export default Component;
