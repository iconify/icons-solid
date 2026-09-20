import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6u4lus2a.css';
import '../../css/s/spvo1lbuz.css';
import '../../css/z/zlllymb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j6u4lus2a"/><path class="spvo1lbuz"/><path class="zlllymb8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:animation-1"} {...others} />);
}

export default Component;
