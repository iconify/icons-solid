import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xhpq4nbqp.css';
import '../../css/n/nhq5y_tpi.css';
import '../../css/s/s_qu5fbwl.css';
import '../../css/s/s9mcwnbry.css';
import '../../css/g/gjq4tncsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xhpq4nbqp"/><path class="nhq5y_tpi"/><path class="s_qu5fbwl"/><path class="s9mcwnbry"/><path class="gjq4tncsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-2-bold-duotone"} {...others} />);
}

export default Component;
