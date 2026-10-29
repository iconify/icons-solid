import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jixpp3-6j.css';
import '../../css/j/jp156pb3t.css';
import '../../css/a/ausc7d0hd.css';
import '../../css/z/ztkh4mbjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jixpp3-6j wm-k"/><path class="jp156pb3t wm-a"/><path class="ausc7d0hd wm-k"/><path class="wm-a ztkh4mbjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:christmas-tree-sketch"} {...others} />);
}

export default Component;
