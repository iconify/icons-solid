import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbgf1vj4o.css';
import '../../css/l/ldkcw25ft.css';
import '../../css/j/jv0fgj_2y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sbgf1vj4o"/><path class="ldkcw25ft"/><path class="jv0fgj_2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blood-drop-20-bold"} {...others} />);
}

export default Component;
