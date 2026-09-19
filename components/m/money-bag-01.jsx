import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yv5n49_tc.css';
import '../../css/m/mpznc0bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yv5n49_tc"/><path class="mpznc0bgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-bag-01"} {...others} />);
}

export default Component;
