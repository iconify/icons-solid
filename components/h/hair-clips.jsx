import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/ctsskzs6g.css';
import '../../css/w/wm0rg-bed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ctsskzs6g"/><path class="wm0rg-bed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hair-clips"} {...others} />);
}

export default Component;
