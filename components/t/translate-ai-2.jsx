import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryi3-obbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ryi3-obbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:translate-ai-2"} {...others} />);
}

export default Component;
