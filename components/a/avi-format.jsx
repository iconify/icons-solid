import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rcvupok2a.css';
import '../../css/r/ri0654i4u.css';
import '../../css/u/u39thchze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rcvupok2a"/><path class="ri0654i4u"/><path class="u39thchze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:avi-format"} {...others} />);
}

export default Component;
