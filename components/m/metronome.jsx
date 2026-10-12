import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wy4dgfd7y.css';
import '../../css/c/c_k8n83mu.css';
import '../../css/i/igmnncb6j.css';
import '../../css/b/bu0sk8u5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wy4dgfd7y"/><path class="c_k8n83mu"/><circle class="igmnncb6j"/><circle class="bu0sk8u5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:metronome"} {...others} />);
}

export default Component;
