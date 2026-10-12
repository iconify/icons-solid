import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i79j4xzwx.css';
import '../../css/h/hc_zcwc_j.css';
import '../../css/e/edh-75b4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i79j4xzwx"/><path class="hc_zcwc_j"/><path class="edh-75b4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:truck-duotone"} {...others} />);
}

export default Component;
