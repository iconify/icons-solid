import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx26_9q9g.css';
import '../../css/f/fxj5wpbnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jx26_9q9g"/><path class="fxj5wpbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-bookmark-filled"} {...others} />);
}

export default Component;
