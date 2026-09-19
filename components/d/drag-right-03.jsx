import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hrt15xihn.css';
import '../../css/d/dfb6i3blf.css';
import '../../css/s/shnvllc_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hrt15xihn"/><path class="dfb6i3blf"/><path class="shnvllc_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drag-right-03"} {...others} />);
}

export default Component;
