import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/luxx1qbws.css';
import '../../css/t/t1gmg32ih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="luxx1qbws"/><path class="t1gmg32ih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:china-temple"} {...others} />);
}

export default Component;
