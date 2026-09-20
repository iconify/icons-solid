import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y214rcc_b.css';
import '../../css/u/ujwnqxu2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y214rcc_b"/><path class="ujwnqxu2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:volume-up"} {...others} />);
}

export default Component;
