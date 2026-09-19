import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q6djpsb4t.css';
import '../../css/o/ozipg7bdf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q6djpsb4t"/><path class="ozipg7bdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:reduce-round-arrow"} {...others} />);
}

export default Component;
