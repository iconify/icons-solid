import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yb0gv5b7o.css';
import '../../css/w/w7-r9c5xo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yb0gv5b7o"/><path class="w7-r9c5xo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:thunderstorm"} {...others} />);
}

export default Component;
