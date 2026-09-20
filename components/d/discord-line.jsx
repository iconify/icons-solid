import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a66rwoh6p.css';
import '../../css/g/g3yeizbsj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a66rwoh6p"/><path class="g3yeizbsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:discord-line"} {...others} />);
}

export default Component;
