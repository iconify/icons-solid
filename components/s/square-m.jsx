import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vl26cwqhr.css';
import '../../css/j/jkttq8bhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vl26cwqhr"/><path class="jkttq8bhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-m"} {...others} />);
}

export default Component;
