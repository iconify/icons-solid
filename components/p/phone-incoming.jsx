import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zwn5-sbxt.css';
import '../../css/u/udh__3bhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zwn5-sbxt"/><path class="udh__3bhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:phone-incoming"} {...others} />);
}

export default Component;
