import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_88a0exd.css';
import '../../css/n/np_ttjutp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_88a0exd"/><path clip-rule="evenodd" class="np_ttjutp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cooking-pot-filled"} {...others} />);
}

export default Component;
