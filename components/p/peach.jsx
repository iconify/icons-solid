import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ds3c-2iwg.css';
import '../../css/q/qu4s2nq6o.css';
import '../../css/r/rsy5uxb_x.css';
import '../../css/a/afs_qebnp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ds3c-2iwg"/><path class="qu4s2nq6o"/><path class="rsy5uxb_x"/><path class="afs_qebnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:peach"} {...others} />);
}

export default Component;
