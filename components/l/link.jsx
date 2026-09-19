import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/ti8m527fg.css';
import '../../css/i/ix5q662hl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ti8m527fg"/><path class="ix5q662hl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:link"} {...others} />);
}

export default Component;
