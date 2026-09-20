import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k80kg2mvy.css';
import '../../css/o/o_xxtf8jm.css';
import '../../css/p/p397vciec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="k80kg2mvy"/><path class="o_xxtf8jm"/><path class="p397vciec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:walking-line-duotone"} {...others} />);
}

export default Component;
