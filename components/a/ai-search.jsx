import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ej0y7mbmx.css';
import '../../css/b/blakxjb4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ej0y7mbmx"/><path class="blakxjb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-search"} {...others} />);
}

export default Component;
