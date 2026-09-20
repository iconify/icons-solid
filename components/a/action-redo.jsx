import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn7g_cbkb.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="wn7g_cbkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:action-redo"} {...others} />);
}

export default Component;
