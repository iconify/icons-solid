import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4c1tgbar.css';
import '../../css/p/p33tsvx9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4c1tgbar"/><path clip-rule="evenodd" class="p33tsvx9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:warning-24"} {...others} />);
}

export default Component;
