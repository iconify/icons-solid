import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c9bmclb1d.css';
import '../../css/t/tjswyhbej.css';
import '../../css/n/nje5g0bbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c9bmclb1d"/><path class="tjswyhbej"/><path class="nje5g0bbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:multiple-pages"} {...others} />);
}

export default Component;
