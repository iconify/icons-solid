import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wqns_pp5c.css';
import '../../css/l/l-h6727_y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="wqns_pp5c"/><path class="l-h6727_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pharmacy"} {...others} />);
}

export default Component;
