import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5qz3lb2a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v5qz3lb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:landscape-ai-line"} {...others} />);
}

export default Component;
