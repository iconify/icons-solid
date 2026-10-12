import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yg--icc_r.css';
import '../../css/k/k515fkbto.css';
import '../../css/k/k-_h2ybwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yg--icc_r"/><path class="k515fkbto"/><path class="k-_h2ybwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:kayak-duotone"} {...others} />);
}

export default Component;
