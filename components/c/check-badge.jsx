import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d687w0_kp.css';
import '../../css/i/iknt-lb2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d687w0_kp"/><path class="iknt-lb2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:check-badge"} {...others} />);
}

export default Component;
