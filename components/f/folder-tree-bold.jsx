import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by22ydp5s.css';
import '../../css/j/j7a0fv5du.css';
import '../../css/e/el9y-0crz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="by22ydp5s"/><path class="j7a0fv5du"/><path class="el9y-0crz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-tree-bold"} {...others} />);
}

export default Component;
