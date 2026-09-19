import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xteprklyo.css';
import '../../css/m/moem5k2vk.css';
import '../../css/z/zy870cbtg.css';
import '../../css/a/al9qvobnd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xteprklyo"/><path class="moem5k2vk"/><circle class="zy870cbtg"/><ellipse class="al9qvobnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mv-1x1"} {...others} />);
}

export default Component;
