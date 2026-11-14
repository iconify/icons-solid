import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wlkkz1sgf.css';
import '../../css/g/gw0l422ve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wlkkz1sgf"/><path class="gw0l422ve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:car-transmission"} {...others} />);
}

export default Component;
