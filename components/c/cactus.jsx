import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b4_l1obsd.css';
import '../../css/d/dr2ub2b3c.css';
import '../../css/w/ww6dn4vxg.css';
import '../../css/w/wb62jpb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="b4_l1obsd wm-shadow"/><path class="dr2ub2b3c wm-shadow"/><path class="ww6dn4vxg"/><path class="wb62jpb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cactus"} {...others} />);
}

export default Component;
