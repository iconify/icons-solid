import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e3t2sobce.css';
import '../../css/n/nlo08ibom.css';
import '../../css/z/zv2-gsb_v.css';
import '../../css/h/h6zwpzppo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="e3t2sobce wm-shadow"/><path class="nlo08ibom wm-shadow"/><path class="zv2-gsb_v"/><path class="h6zwpzppo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-down-left"} {...others} />);
}

export default Component;
