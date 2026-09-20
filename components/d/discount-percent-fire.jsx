import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/k4frm1bxg.css';
import '../../css/i/irvoe-blc.css';
import '../../css/b/bpl5rbbah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="k4frm1bxg"/><path class="irvoe-blc"/><path class="bpl5rbbah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:discount-percent-fire"} {...others} />);
}

export default Component;
