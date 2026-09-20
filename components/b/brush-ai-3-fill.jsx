import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5bc61box.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s5bc61box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:brush-ai-3-fill"} {...others} />);
}

export default Component;
