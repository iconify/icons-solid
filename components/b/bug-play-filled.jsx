import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0wlds3qh.css';
import '../../css/l/lda5p5b_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0wlds3qh"/><path clip-rule="evenodd" class="lda5p5b_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bug-play-filled"} {...others} />);
}

export default Component;
