import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/icffwjiiu.css';
import '../../css/z/zcrulbcrk.css';
import '../../css/y/yu_igna9n.css';
import '../../css/l/llthbtb_s.css';
import '../../css/o/oxslsccrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="icffwjiiu wm-shadow"/><path class="wm-shadow zcrulbcrk"/><path class="yu_igna9n"/><path class="llthbtb_s"/><path class="oxslsccrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:route"} {...others} />);
}

export default Component;
