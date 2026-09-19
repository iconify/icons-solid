import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hbsrlibjk.css';
import '../../css/e/e6q1v-bow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hbsrlibjk"/><path class="e6q1v-bow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pocket"} {...others} />);
}

export default Component;
