import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/w/w32puc2aq.css';
import '../../css/i/ikun3mboq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="w32puc2aq"/><path class="ikun3mboq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:topic-discussion"} {...others} />);
}

export default Component;
