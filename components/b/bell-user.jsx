import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tirjqob-n.css';
import '../../css/x/x_x896bnj.css';
import '../../css/q/qlo39_9vq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tirjqob-n"/><path class="x_x896bnj"/><path class="qlo39_9vq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:bell-user"} {...others} />);
}

export default Component;
