import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/px--8xbgl.css';
import '../../css/m/m_uqjfbny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="px--8xbgl"/><path class="m_uqjfbny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:phone-outgoing"} {...others} />);
}

export default Component;
