import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rlhgxg0rl.css';
import '../../css/v/v199v8bwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rlhgxg0rl"/><path class="v199v8bwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:substract"} {...others} />);
}

export default Component;
