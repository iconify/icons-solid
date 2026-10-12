import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfa1y2pwb.css';
import '../../css/l/l_fae7rzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nfa1y2pwb"/><path class="l_fae7rzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shredder-filled"} {...others} />);
}

export default Component;
