import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/p/pfh9mlxuq.css';
import '../../css/i/ihkbulo9i.css';
import '../../css/g/gjsii3f9x.css';
import '../../css/p/p3aw6_brk.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="pfh9mlxuq"/><path class="ihkbulo9i"/><path class="gjsii3f9x"/><path class="p3aw6_brk"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:checkmark-filled-circle"} {...others} />);
}

export default Component;
