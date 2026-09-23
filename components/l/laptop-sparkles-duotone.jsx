import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tmvjeobmo.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/j/jeqbjaccq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tmvjeobmo"/><path class="xon_9ib8a"/><path class="jeqbjaccq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:laptop-sparkles-duotone"} {...others} />);
}

export default Component;
