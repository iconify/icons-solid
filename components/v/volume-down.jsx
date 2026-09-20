import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qk4dadbet.css';
import '../../css/y/yn5jw2bvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qk4dadbet"/><path class="yn5jw2bvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:volume-down"} {...others} />);
}

export default Component;
