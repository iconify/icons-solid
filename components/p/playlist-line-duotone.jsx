import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ynnqgt8sp.css';
import '../../css/r/rhlnpmbpq.css';
import '../../css/v/vi7mzdtvt.css';
import '../../css/z/zbwqridka.css';
import '../../css/n/n4en7dbvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ynnqgt8sp"/><path class="rhlnpmbpq"/><path class="vi7mzdtvt"/><path class="zbwqridka"/><path class="n4en7dbvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-line-duotone"} {...others} />);
}

export default Component;
