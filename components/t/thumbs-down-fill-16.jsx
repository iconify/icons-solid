import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/clcpbnkzo.css';
import '../../css/r/rozhgzbsb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="clcpbnkzo"/><rect class="rozhgzbsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:thumbs-down-fill-16"} {...others} />);
}

export default Component;
