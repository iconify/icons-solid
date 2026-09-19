import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dip3swxul.css';
import '../../css/n/n464jtbvv.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><rect class="dip3swxul"/><path class="n464jtbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:monitor-fill-12"} {...others} />);
}

export default Component;
