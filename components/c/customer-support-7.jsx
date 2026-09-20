import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wyw19bcuf.css';
import '../../css/x/x_zapubhu.css';
import '../../css/c/cgwc_t6sh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="wyw19bcuf"/><path class="x_zapubhu"/><path class="cgwc_t6sh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:customer-support-7"} {...others} />);
}

export default Component;
