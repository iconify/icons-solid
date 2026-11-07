import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4xa_-g-t.css';
import '../../css/x/x1ss0rbtf.css';
import '../../css/m/mwvc4bkeq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d4xa_-g-t"/><path class="x1ss0rbtf"/><path clip-rule="evenodd" class="mwvc4bkeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:emoji-funny-square-outline"} {...others} />);
}

export default Component;
