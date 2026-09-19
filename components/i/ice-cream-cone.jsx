import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/g4e8mdjga.css';
import '../../css/q/qumy_vbsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="g4e8mdjga"/><path class="qumy_vbsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ice-cream-cone"} {...others} />);
}

export default Component;
