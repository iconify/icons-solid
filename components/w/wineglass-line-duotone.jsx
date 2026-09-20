import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nycani22t.css';
import '../../css/k/kvwd90-nm.css';
import '../../css/s/sjslhg_9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nycani22t"/><path class="kvwd90-nm"/><path class="sjslhg_9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wineglass-line-duotone"} {...others} />);
}

export default Component;
