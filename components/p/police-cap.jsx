import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vqclyacqa.css';
import '../../css/d/dak0hk3_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vqclyacqa"/><path class="dak0hk3_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:police-cap"} {...others} />);
}

export default Component;
