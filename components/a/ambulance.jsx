import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a90-ysdbq.css';
import '../../css/e/ezyq-4oxq.css';
import '../../css/i/i54ucfb4f.css';
import '../../css/p/pjlxlyk-n.css';
import '../../css/j/jrqk9vb8m.css';
import '../../css/n/n8kmwlb8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a90-ysdbq wm-shadow"/><path class="ezyq-4oxq wm-shadow"/><path class="i54ucfb4f"/><path class="pjlxlyk-n"/><path class="jrqk9vb8m"/><path class="n8kmwlb8h wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:ambulance"} {...others} />);
}

export default Component;
