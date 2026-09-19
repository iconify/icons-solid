import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/we7ekht8p.css';
import '../../css/t/tkvf7_mjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="we7ekht8p"/><path class="tkvf7_mjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:screen-share"} {...others} />);
}

export default Component;
