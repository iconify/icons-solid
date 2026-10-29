import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vguqmy3wv.css';
import '../../css/u/uopk9yb-w.css';
import '../../css/h/h-8800bhh.css';
import '../../css/w/wrdh-bbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vguqmy3wv wm-k"/><path class="uopk9yb-w wm-k"/><path class="h-8800bhh wm-k"/><path class="wm-shine wrdh-bbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chevron-down"} {...others} />);
}

export default Component;
