import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/into8ac1h.css';
import '../../css/e/ezshh0bgn.css';
import '../../css/l/luu53hbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="into8ac1h"/><path class="ezshh0bgn"/><path class="luu53hbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:exit-linear"} {...others} />);
}

export default Component;
