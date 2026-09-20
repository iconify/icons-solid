import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/c/c7vp9yj-i.css';
import '../../css/y/ymn18bcnu.css';
import '../../css/l/l5_v93xsj.css';
import '../../css/d/djr3_db2n.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="c7vp9yj-i"/><path class="ymn18bcnu"/><path clip-rule="evenodd" class="l5_v93xsj"/><path clip-rule="evenodd" class="djr3_db2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:tauri-light"} {...others} />);
}

export default Component;
