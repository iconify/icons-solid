import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/b42uobcxl.css';
import '../../css/z/zr6c0qbrk.css';
import '../../css/v/v_qpa3bus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="b42uobcxl wm-k"/><path class="wm-a zr6c0qbrk"/><path class="v_qpa3bus wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:list-tree"} {...others} />);
}

export default Component;
