import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sc6p54bfo.css';
import '../../css/s/s9c_fccpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sc6p54bfo"/><path class="s9c_fccpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brackets-line-duotone"} {...others} />);
}

export default Component;
