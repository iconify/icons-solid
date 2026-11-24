import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sthnq_bas.css';
import '../../css/r/rm7c5vbvg.css';
import '../../css/d/dawzjdknl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sthnq_bas"/><path class="rm7c5vbvg"/><path class="dawzjdknl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cast-filled"} {...others} />);
}

export default Component;
