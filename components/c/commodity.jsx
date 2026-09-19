import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ndycvloua.css';
import '../../css/n/n2rfvgnzc.css';
import '../../css/y/ybpq96i6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ndycvloua"/><path class="n2rfvgnzc"/><path class="ybpq96i6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:commodity"} {...others} />);
}

export default Component;
