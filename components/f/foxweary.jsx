import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fac77ybxs.css';
import '../../css/t/t8vk-tb8q.css';
import '../../css/k/kpe7unnah.css';
import '../../css/f/ft6wmtbwh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fac77ybxs"/><path class="t8vk-tb8q"/><path class="kpe7unnah"/><path class="ft6wmtbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:foxweary"} {...others} />);
}

export default Component;
