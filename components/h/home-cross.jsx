import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j6mkb3bse.css';
import '../../css/w/wjiiucbss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j6mkb3bse"/><path class="wjiiucbss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:home-cross"} {...others} />);
}

export default Component;
