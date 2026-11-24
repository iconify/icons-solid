import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs_nhrb3i.css';
import '../../css/v/vx68g0b8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cs_nhrb3i"/><path class="vx68g0b8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-letter-p-off-filled"} {...others} />);
}

export default Component;
