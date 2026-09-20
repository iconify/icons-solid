import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p314bvb0h.css';
import '../../css/k/k_v9z9gok.css';
import '../../css/f/f39q7q5aw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p314bvb0h"/><path class="k_v9z9gok"/><path class="f39q7q5aw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:mail-send-envelope"} {...others} />);
}

export default Component;
