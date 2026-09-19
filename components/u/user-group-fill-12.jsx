import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_kavkf9c.css';
import '../../css/d/dg-px6pzq.css';
import '../../css/y/yxlcjbbfn.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><circle class="y_kavkf9c"/><circle class="dg-px6pzq"/><path class="yxlcjbbfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-group-fill-12"} {...others} />);
}

export default Component;
