import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dqwj_7bjz.css';
import '../../css/n/n-3hotwfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dqwj_7bjz"/><path class="n-3hotwfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:axis-3d"} {...others} />);
}

export default Component;
