import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v5y5gxn0v.css';
import '../../css/d/dqr6ghb5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v5y5gxn0v"/><path class="dqr6ghb5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pulse-rectangle-01"} {...others} />);
}

export default Component;
