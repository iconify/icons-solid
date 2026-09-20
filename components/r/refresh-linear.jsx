import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m84t_4viq.css';
import '../../css/c/cc2xbzt4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m84t_4viq"/><path class="cc2xbzt4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-linear"} {...others} />);
}

export default Component;
