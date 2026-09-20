import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-2i06puf.css';
import '../../css/i/i0l09vzyb.css';
import '../../css/n/n_n679b9r.css';
import '../../css/j/jslk2fb-q.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="n-2i06puf"/><path class="i0l09vzyb"/><path clip-rule="evenodd" class="n_n679b9r"/><path clip-rule="evenodd" class="jslk2fb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:tauri"} {...others} />);
}

export default Component;
