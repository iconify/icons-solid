import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsrhfac5n.css';
import '../../css/z/z-r_m6nkt.css';
import '../../css/f/f2io7dbvb.css';
import '../../css/g/gimpz9izd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rsrhfac5n"/><path class="z-r_m6nkt"/><path class="f2io7dbvb"/><path class="gimpz9izd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-off-broken"} {...others} />);
}

export default Component;
