import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkl9bwb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lkl9bwb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:qwen-ai-line"} {...others} />);
}

export default Component;
