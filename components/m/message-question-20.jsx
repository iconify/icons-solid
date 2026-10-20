import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzs5177np.css';
import '../../css/n/non1cd9gr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fzs5177np"/><path class="non1cd9gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-question-20"} {...others} />);
}

export default Component;
