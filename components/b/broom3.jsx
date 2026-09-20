import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o1_0ng4ai.css';
import '../../css/g/gyyu0nmem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o1_0ng4ai"/><path class="gyyu0nmem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:broom3"} {...others} />);
}

export default Component;
