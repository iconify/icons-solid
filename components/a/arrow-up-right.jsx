import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uq9mxpybb.css';
import '../../css/t/tb17rxb9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uq9mxpybb"/><path class="tb17rxb9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:arrow-up-right"} {...others} />);
}

export default Component;
