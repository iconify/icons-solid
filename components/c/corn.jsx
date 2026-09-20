import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_9fc8v9h.css';
import '../../css/h/h0hl8927f.css';
import '../../css/z/zqcbadvgz.css';
import '../../css/y/y-f3avbmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i_9fc8v9h"/><path class="h0hl8927f"/><path class="zqcbadvgz"/><path class="y-f3avbmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:corn"} {...others} />);
}

export default Component;
