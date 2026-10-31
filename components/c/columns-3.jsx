import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a5ke_q-oc.css';
import '../../css/u/ufhyd-bxp.css';
import '../../css/c/cvpr-5bot.css';
import '../../css/v/vrb8f8bma.css';
import '../../css/r/r69eqjbgn.css';
import '../../css/v/v76vaobjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a5ke_q-oc wm-shadow"/><path class="ufhyd-bxp wm-shadow"/><path class="cvpr-5bot"/><path class="vrb8f8bma"/><path class="r69eqjbgn"/><path class="v76vaobjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:columns-3"} {...others} />);
}

export default Component;
