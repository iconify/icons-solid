import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/oj30h6aev.css';
import '../../css/f/f70gywb1p.css';
import '../../css/i/ihlljlbzl.css';
import '../../css/o/oqjn4eb_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="oj30h6aev wm-shadow"/><path class="f70gywb1p wm-shadow"/><path class="ihlljlbzl"/><path class="oqjn4eb_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:droplet"} {...others} />);
}

export default Component;
