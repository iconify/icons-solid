import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l5zk7vk6d.css';
import '../../css/z/zop9rmbjf.css';
import '../../css/h/hz_za5x5c.css';

const viewBox = {"width":242,"height":241};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l5zk7vk6d"/><path class="zop9rmbjf"/><path class="hz_za5x5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:zero"} {...others} />);
}

export default Component;
