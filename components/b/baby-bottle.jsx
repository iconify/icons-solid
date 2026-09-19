import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rc-8-5h4q.css';
import '../../css/v/vizrcy8rb.css';
import '../../css/y/ycosmwbcm.css';
import '../../css/s/scaycxbvg.css';
import '../../css/y/yi5okyb6y.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rc-8-5h4q"/><path class="vizrcy8rb"/><path class="ycosmwbcm"/><path class="scaycxbvg"/><path class="yi5okyb6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:baby-bottle"} {...others} />);
}

export default Component;
