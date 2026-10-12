import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8hbf0lfj.css';
import '../../css/b/bw5sq60eg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8hbf0lfj"/><path class="bw5sq60eg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:inbox-filled"} {...others} />);
}

export default Component;
