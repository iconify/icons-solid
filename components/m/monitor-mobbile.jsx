import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j50atccst.css';
import '../../css/m/mxqmy38et.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j50atccst"/><path class="mxqmy38et"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:monitor-mobbile"} {...others} />);
}

export default Component;
