import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rg4phqbtj.css';
import '../../css/t/tz17h-bbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rg4phqbtj"/><path class="tz17h-bbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:long-arrow-right-up"} {...others} />);
}

export default Component;
