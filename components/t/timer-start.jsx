import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f-t_f7l_y.css';
import '../../css/j/jsr4rrr8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f-t_f7l_y"/><path class="jsr4rrr8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:timer-start"} {...others} />);
}

export default Component;
