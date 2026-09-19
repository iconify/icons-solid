import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s3amhcb_r.css';
import '../../css/p/p8noaabtb.css';
import '../../css/a/an7jw-jll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s3amhcb_r"/><path class="p8noaabtb"/><path class="an7jw-jll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:baby-girl-dress"} {...others} />);
}

export default Component;
