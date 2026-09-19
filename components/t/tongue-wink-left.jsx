import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m215jpbcr.css';
import '../../css/w/wpmxfxjrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m215jpbcr"/><path class="wpmxfxjrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tongue-wink-left"} {...others} />);
}

export default Component;
