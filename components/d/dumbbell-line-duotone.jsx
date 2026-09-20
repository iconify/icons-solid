import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/keq4rfk6c.css';
import '../../css/a/agockdsbo.css';
import '../../css/p/pa44c5jmb.css';
import '../../css/y/yo6u3gbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="keq4rfk6c"/><path class="agockdsbo"/><path class="pa44c5jmb"/><path class="yo6u3gbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-line-duotone"} {...others} />);
}

export default Component;
