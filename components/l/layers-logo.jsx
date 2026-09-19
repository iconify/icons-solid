import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-v3vrb3z.css';
import '../../css/m/mhtdy_mav.css';
import '../../css/y/yb2lqrucn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-v3vrb3z"/><path class="mhtdy_mav"/><path class="yb2lqrucn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layers-logo"} {...others} />);
}

export default Component;
