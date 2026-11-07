import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp69ui1wu.css';
import '../../css/f/f63v77q_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wp69ui1wu"/><path class="f63v77q_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:undo-right-bold-duotone"} {...others} />);
}

export default Component;
