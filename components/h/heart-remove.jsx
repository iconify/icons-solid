import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vk5tuu3mi.css';
import '../../css/g/gjdjfffgs.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="vk5tuu3mi"/><path class="gjdjfffgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:heart-remove"} {...others} />);
}

export default Component;
