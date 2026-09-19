import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/i-14abc6r.css';
import '../../css/d/d8976ozrs.css';
import '../../css/t/thkb21bpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="i-14abc6r"/><path class="d8976ozrs"/><path class="thkb21bpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:man-woman"} {...others} />);
}

export default Component;
