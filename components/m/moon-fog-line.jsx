import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh9mg9beq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wh9mg9beq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:moon-fog-line"} {...others} />);
}

export default Component;
