import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sry2f1b9n.css';
import '../../css/g/g8_-9ibpo.css';
import '../../css/u/u7kjvobou.css';
import '../../css/k/kpz46-vtn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="sry2f1b9n"/><path class="g8_-9ibpo"/><path class="u7kjvobou"/><path class="kpz46-vtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:clipboard"} {...others} />);
}

export default Component;
