import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x_8xq3btp.css';
import '../../css/l/lw349jzkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><rect class="x_8xq3btp"/><path class="lw349jzkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:ruler"} {...others} />);
}

export default Component;
