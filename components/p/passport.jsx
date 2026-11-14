import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/etzv95ivj.css';
import '../../css/d/dhaor6i2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="etzv95ivj"/><path class="dhaor6i2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:passport"} {...others} />);
}

export default Component;
