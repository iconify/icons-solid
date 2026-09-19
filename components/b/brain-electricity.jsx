import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wlo7xjcjj.css';
import '../../css/j/j6scfrbcz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wlo7xjcjj"/><path class="j6scfrbcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:brain-electricity"} {...others} />);
}

export default Component;
