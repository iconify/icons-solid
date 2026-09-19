import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sg07fubee.css';
import '../../css/m/mwiiabcko.css';
import '../../css/x/xj-bndb2k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="sg07fubee"/><path class="mwiiabcko"/><path class="xj-bndb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-beard"} {...others} />);
}

export default Component;
