import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ivuqkwqne.css';
import '../../css/e/evvnrpb1m.css';
import '../../css/t/ta0zdfd_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ivuqkwqne"/><path class="evvnrpb1m"/><path class="ta0zdfd_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-line-duotone"} {...others} />);
}

export default Component;
