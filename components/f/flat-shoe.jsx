import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz-py2b_h.css';
import '../../css/p/pk9t0jekh.css';
import '../../css/w/wm-kebctg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qz-py2b_h"/><path class="pk9t0jekh"/><path class="wm-kebctg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:flat-shoe"} {...others} />);
}

export default Component;
