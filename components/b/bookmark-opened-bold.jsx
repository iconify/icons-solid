import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4my-sbai.css';
import '../../css/j/ja6qjjbzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q4my-sbai"/><path class="ja6qjjbzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-opened-bold"} {...others} />);
}

export default Component;
