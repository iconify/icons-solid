import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zgnmhybub.css';
import '../../css/b/b8rq8pb_n.css';
import '../../css/a/ahhqo1b4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="zgnmhybub"/><path class="b8rq8pb_n"/><path class="ahhqo1b4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sticky-note-off-sharp-duotone"} {...others} />);
}

export default Component;
