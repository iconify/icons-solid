import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ce8bd69bw.css';
import '../../css/q/q8zbp4jyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ce8bd69bw"/><path class="q8zbp4jyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:arrow-right"} {...others} />);
}

export default Component;
