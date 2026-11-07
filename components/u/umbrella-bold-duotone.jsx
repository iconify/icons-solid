import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exl39kb_y.css';
import '../../css/y/yoytqz1kl.css';
import '../../css/f/fuor2f7ck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="exl39kb_y"/><path class="yoytqz1kl"/><path class="fuor2f7ck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:umbrella-bold-duotone"} {...others} />);
}

export default Component;
