import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yh4vhcbeb.css';
import '../../css/b/b04akfbjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yh4vhcbeb"/><path class="b04akfbjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:undo-dot"} {...others} />);
}

export default Component;
