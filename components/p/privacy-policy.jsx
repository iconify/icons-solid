import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f5fgk6uev.css';
import '../../css/j/j6xxlsbzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f5fgk6uev"/><path class="j6xxlsbzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:privacy-policy"} {...others} />);
}

export default Component;
