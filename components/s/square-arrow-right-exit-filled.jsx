import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tok2xfb_t.css';
import '../../css/c/cp5kib_ch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tok2xfb_t"/><path class="cp5kib_ch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-arrow-right-exit-filled"} {...others} />);
}

export default Component;
