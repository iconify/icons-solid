import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j5r9vy1yt.css';
import '../../css/g/gqbjnibrr.css';
import '../../css/r/r0dvnpb_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j5r9vy1yt"/><path class="gqbjnibrr"/><path class="r0dvnpb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:estimate-01"} {...others} />);
}

export default Component;
