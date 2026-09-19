import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqx1n_x7l.css';
import '../../css/l/lbt39w0vi.css';
import '../../css/r/rth5aubws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aqx1n_x7l"/><path class="lbt39w0vi"/><path class="rth5aubws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:headset-off"} {...others} />);
}

export default Component;
