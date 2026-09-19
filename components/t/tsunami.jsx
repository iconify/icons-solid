import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e2irt0b7x.css';
import '../../css/i/ihw3qzrvl.css';
import '../../css/p/pkn-bebts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e2irt0b7x"/><path class="ihw3qzrvl"/><path class="pkn-bebts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tsunami"} {...others} />);
}

export default Component;
