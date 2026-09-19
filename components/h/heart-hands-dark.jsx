import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hw50r1bhi.css';
import '../../css/q/q95augsqe.css';
import '../../css/y/y_wvf86zn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hw50r1bhi"/><path clip-rule="evenodd" class="q95augsqe"/><path class="y_wvf86zn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:heart-hands-dark"} {...others} />);
}

export default Component;
