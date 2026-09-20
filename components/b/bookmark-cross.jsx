import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i0flq-qyx.css';
import '../../css/e/ecswrccex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i0flq-qyx"/><path class="ecswrccex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:bookmark-cross"} {...others} />);
}

export default Component;
