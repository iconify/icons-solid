import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wlo7xjcjj.css';
import '../../css/l/lwq8an-5b.css';
import '../../css/u/uo09-pbaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wlo7xjcjj"/><path class="lwq8an-5b"/><path class="uo09-pbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:brain"} {...others} />);
}

export default Component;
