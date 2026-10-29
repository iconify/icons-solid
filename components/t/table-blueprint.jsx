import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jrpbbdoby.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/h/hjheo7blk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jrpbbdoby wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="hjheo7blk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:table-blueprint"} {...others} />);
}

export default Component;
