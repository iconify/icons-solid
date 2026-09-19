import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/h6zfdhp0a.css';
import '../../css/q/qvi_y__xt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="h6zfdhp0a"/><path class="qvi_y__xt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:apple-01"} {...others} />);
}

export default Component;
