import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3u1wjb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c3u1wjb0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clipboard-list-filled"} {...others} />);
}

export default Component;
