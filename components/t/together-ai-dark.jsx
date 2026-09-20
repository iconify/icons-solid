import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h987mzufh.css';
import '../../css/d/dgqdveb1b.css';
import '../../css/b/b9u_jvake.css';

const viewBox = {"width":2159,"height":501};
const content = `<path class="h987mzufh"/><path class="dgqdveb1b"/><path class="b9u_jvake"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:together-ai-dark"} {...others} />);
}

export default Component;
