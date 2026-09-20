import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1_r-zqlu.css';
import '../../css/j/j7r6crb5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1_r-zqlu"/><path class="j7r6crb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cellphone-2-ai-line"} {...others} />);
}

export default Component;
