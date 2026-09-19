import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qeou3-vct.css';
import '../../css/r/rmp7r0bjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qeou3-vct"/><path class="rmp7r0bjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-look-down"} {...others} />);
}

export default Component;
