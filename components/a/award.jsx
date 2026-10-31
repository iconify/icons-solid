import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wnpq31wdo.css';
import '../../css/o/oqv16xbwi.css';
import '../../css/t/tbkwq6b6s.css';
import '../../css/m/mx42ssb0m.css';
import '../../css/b/bflzs0zqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow wnpq31wdo"/><path class="oqv16xbwi wm-shadow"/><path class="tbkwq6b6s"/><path class="mx42ssb0m"/><path class="bflzs0zqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:award"} {...others} />);
}

export default Component;
