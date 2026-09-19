import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m1qfgubcd.css';
import '../../css/b/bxv6uybla.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="m1qfgubcd"/><path class="bxv6uybla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:nazar-amulet"} {...others} />);
}

export default Component;
