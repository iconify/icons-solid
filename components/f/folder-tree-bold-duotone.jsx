import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn8j1cc6q.css';
import '../../css/b/by22ydp5s.css';
import '../../css/q/quxmn86ec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cn8j1cc6q"/><path class="by22ydp5s"/><path class="quxmn86ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-tree-bold-duotone"} {...others} />);
}

export default Component;
