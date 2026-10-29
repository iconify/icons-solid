import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c3ls5nbaa.css';
import '../../css/x/xru6xobqx.css';
import '../../css/e/e-hz-ti3g.css';
import '../../css/y/yeskuobie.css';
import '../../css/p/p70io6b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c3ls5nbaa"/><path class="wm-k xru6xobqx"/><path class="e-hz-ti3g wm-k"/><path class="wm-a yeskuobie"/><path class="p70io6b2r wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spider-sketch"} {...others} />);
}

export default Component;
