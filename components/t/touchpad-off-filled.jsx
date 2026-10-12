import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb_f6kbki.css';
import '../../css/z/zb_q1oboj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rb_f6kbki"/><path class="zb_q1oboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:touchpad-off-filled"} {...others} />);
}

export default Component;
