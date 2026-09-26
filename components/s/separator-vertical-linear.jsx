import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rb-l41-ka.css';
import '../../css/j/jrvuve-_c.css';
import '../../css/x/x1f4lc3zb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rb-l41-ka"/><path class="jrvuve-_c"/><path class="x1f4lc3zb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:separator-vertical-linear"} {...others} />);
}

export default Component;
