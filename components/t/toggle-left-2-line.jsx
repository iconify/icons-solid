import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h29abmbpa.css';
import '../../css/q/qa1c6nb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h29abmbpa"/><path class="qa1c6nb7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:toggle-left-2-line"} {...others} />);
}

export default Component;
