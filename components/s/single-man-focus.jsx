import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x_64fgtwp.css';
import '../../css/y/yzegfvbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x_64fgtwp"/><path class="yzegfvbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-man-focus"} {...others} />);
}

export default Component;
