import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jke_9w8am.css';
import '../../css/p/px9v4k7lg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jke_9w8am"/><path class="px9v4k7lg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volleyball-2-line-duotone"} {...others} />);
}

export default Component;
