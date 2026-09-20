import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p7aa-3nja.css';
import '../../css/t/tldq1_vqs.css';
import '../../css/k/kk6lmubmz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="p7aa-3nja"/><path class="tldq1_vqs"/><path class="kk6lmubmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:walking-round-line-duotone"} {...others} />);
}

export default Component;
