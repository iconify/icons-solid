import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e8cignbfk.css';
import '../../css/w/wahcdwlcz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e8cignbfk"/><path class="wahcdwlcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:turtle-neck"} {...others} />);
}

export default Component;
