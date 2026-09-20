import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t-vbe6pbb.css';
import '../../css/h/h_wxks0bq.css';
import '../../css/f/fcaf33b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t-vbe6pbb"/><path class="h_wxks0bq"/><path class="fcaf33b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-line-duotone"} {...others} />);
}

export default Component;
