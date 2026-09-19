import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gz5hn93bt.css';
import '../../css/v/v8t38ubkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gz5hn93bt"/><path class="v8t38ubkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:repost"} {...others} />);
}

export default Component;
