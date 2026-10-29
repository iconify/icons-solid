import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v-483rb4t.css';
import '../../css/g/g2wwaeb3g.css';
import '../../css/b/b2sz1838t.css';
import '../../css/b/b5jcl5blk.css';
import '../../css/x/xk6eoibzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v-483rb4t wm-k"/><path class="g2wwaeb3g wm-a"/><path class="b2sz1838t wm-shadow"/><path class="b5jcl5blk wm-k"/><path class="wm-a xk6eoibzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:person-standing-engrave"} {...others} />);
}

export default Component;
