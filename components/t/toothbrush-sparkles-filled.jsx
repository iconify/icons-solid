import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rusr7tbak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rusr7tbak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:toothbrush-sparkles-filled"} {...others} />);
}

export default Component;
