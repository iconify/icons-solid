import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lzc0po5kz.css';
import '../../css/i/ii1ti1xhd.css';
import '../../css/a/ait50nbsc.css';
import '../../css/a/a_q96ac8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lzc0po5kz"/><path class="ii1ti1xhd"/><path class="ait50nbsc"/><path class="a_q96ac8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:saturation"} {...others} />);
}

export default Component;
