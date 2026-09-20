import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ir4kah-ll.css';
import '../../css/r/rfjq0k54a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ir4kah-ll"/><path class="rfjq0k54a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:stroke-thickness"} {...others} />);
}

export default Component;
