import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n9enzdlcb.css';
import '../../css/o/onkbx6e0j.css';
import '../../css/y/y-18oobhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n9enzdlcb"/><path class="onkbx6e0j"/><path class="y-18oobhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-horizonta-spacing-line-duotone"} {...others} />);
}

export default Component;
