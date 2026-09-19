import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f-kifbbrq.css';
import '../../css/v/v8sxwzb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f-kifbbrq"/><path class="v8sxwzb2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:elearning-exchange"} {...others} />);
}

export default Component;
