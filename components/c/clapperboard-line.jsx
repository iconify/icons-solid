import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w39b4_bgr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w39b4_bgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:clapperboard-line"} {...others} />);
}

export default Component;
