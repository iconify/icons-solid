import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l10mnouwk.css';
import '../../css/r/rt2zemb8t.css';
import '../../css/d/d8iz-8b8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l10mnouwk"/><path class="rt2zemb8t"/><path class="d8iz-8b8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-bold"} {...others} />);
}

export default Component;
