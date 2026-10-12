import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yts5iln8l.css';
import '../../css/d/d4f-gldbn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yts5iln8l"/><path clip-rule="evenodd" class="d4f-gldbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-a-filled"} {...others} />);
}

export default Component;
