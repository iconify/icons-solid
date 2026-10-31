import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w4o1dbf3v.css';
import '../../css/b/bfh562b1c.css';
import '../../css/u/uablz1qlt.css';
import '../../css/l/lz7udcbbw.css';
import '../../css/t/tg7vf-bah.css';
import '../../css/z/zpht368fj.css';
import '../../css/w/wk2tbtb_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="w4o1dbf3v wm-shadow"/><path class="bfh562b1c wm-s"/><path class="uablz1qlt wm-shadow"/><path class="lz7udcbbw"/><path class="tg7vf-bah"/><path class="wm-s zpht368fj"/><path class="wk2tbtb_c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:moon-star"} {...others} />);
}

export default Component;
