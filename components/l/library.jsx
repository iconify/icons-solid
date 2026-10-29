import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtrc3i7jy.css';
import '../../css/u/uhpcdeb9y.css';
import '../../css/x/x3akavw-n.css';
import '../../css/l/l47hb8b9y.css';
import '../../css/x/xq0o1v3pn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jtrc3i7jy wm-k"/><path class="uhpcdeb9y wm-k"/><path class="wm-a x3akavw-n"/><path class="l47hb8b9y wm-k"/><path class="wm-k xq0o1v3pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:library"} {...others} />);
}

export default Component;
