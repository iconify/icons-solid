import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dcxilvb-z.css';
import '../../css/r/rq-mg_bte.css';
import '../../css/l/lt87iveio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dcxilvb-z"/><path class="rq-mg_bte"/><path class="lt87iveio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-line-duotone"} {...others} />);
}

export default Component;
