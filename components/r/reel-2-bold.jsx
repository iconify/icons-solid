import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf3nmubio.css';
import '../../css/t/tjfdtw4pg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yf3nmubio"/><path clip-rule="evenodd" class="tjfdtw4pg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reel-2-bold"} {...others} />);
}

export default Component;
