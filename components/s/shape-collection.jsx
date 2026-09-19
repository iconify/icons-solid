import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sq7x27b-s.css';
import '../../css/y/yphewc7qd.css';
import '../../css/o/orp2owizz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sq7x27b-s"/><circle class="yphewc7qd"/><path class="orp2owizz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shape-collection"} {...others} />);
}

export default Component;
