import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/isyhoub8b.css';
import '../../css/l/lmp-brb6l.css';
import '../../css/b/btm0toslu.css';
import '../../css/z/zdrzfyzaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="isyhoub8b wm-shadow"/><path class="lmp-brb6l wm-shadow"/><path class="btm0toslu"/><path class="zdrzfyzaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-koala"} {...others} />);
}

export default Component;
