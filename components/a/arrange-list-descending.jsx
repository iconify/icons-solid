import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wbfh0nbac.css';
import '../../css/i/inwi76h2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wbfh0nbac"/><path class="inwi76h2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrange-list-descending"} {...others} />);
}

export default Component;
