import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1m5ykyav.css';
import '../../css/u/uylh2bc2i.css';
import '../../css/w/wuyl63pyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1m5ykyav wm-k"/><path class="uylh2bc2i wm-a"/><path class="wm-a wuyl63pyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bat"} {...others} />);
}

export default Component;
