import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tj3yekbmt.css';
import '../../css/d/delqogbvb.css';
import '../../css/l/l528qjbtl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tj3yekbmt"/><path class="delqogbvb"/><path class="l528qjbtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chef-hat-heart-bold-duotone"} {...others} />);
}

export default Component;
