import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn8g1ddly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yn8g1ddly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:grok-2-fill"} {...others} />);
}

export default Component;
