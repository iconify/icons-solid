import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oezaxpo8x.css';
import '../../css/g/gfk6kebjy.css';
import '../../css/s/s3cglumea.css';
import '../../css/n/n4rawnq3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="oezaxpo8x"/><path class="gfk6kebjy"/><path class="s3cglumea"/><path class="n4rawnq3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-broken-line-duotone"} {...others} />);
}

export default Component;
