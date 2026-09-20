import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s6p5_tbgk.css';
import '../../css/v/v-yckhu5b.css';
import '../../css/t/t98ocibjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s6p5_tbgk"/><path class="v-yckhu5b"/><path class="t98ocibjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:desktop-action-monitor-remove"} {...others} />);
}

export default Component;
