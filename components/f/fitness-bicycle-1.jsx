import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gtck4ysrt.css';
import '../../css/e/ewgdigbjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gtck4ysrt"/><path class="ewgdigbjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:fitness-bicycle-1"} {...others} />);
}

export default Component;
