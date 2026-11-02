import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5kbxcc2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b5kbxcc2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:moon-stars-fill"} {...others} />);
}

export default Component;
