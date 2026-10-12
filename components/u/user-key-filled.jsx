import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_0m6ybdy.css';
import '../../css/s/s2joibctc.css';
import '../../css/w/wtr3z9boz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_0m6ybdy"/><path clip-rule="evenodd" class="s2joibctc"/><path class="wtr3z9boz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-key-filled"} {...others} />);
}

export default Component;
