import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkhbt_79b.css';
import '../../css/f/f49833nfr.css';
import '../../css/r/rolha4znv.css';
import '../../css/a/ab51s-bxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xkhbt_79b"/><path class="f49833nfr"/><path clip-rule="evenodd" class="rolha4znv"/><path class="ab51s-bxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:speed-duotone-line"} {...others} />);
}

export default Component;
