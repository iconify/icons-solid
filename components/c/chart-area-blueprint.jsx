import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t5zj4129q.css';
import '../../css/b/bxjv56brc.css';
import '../../css/q/qnftlbnpd.css';
import '../../css/c/cw36_6mco.css';
import '../../css/j/jwyvidb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="t5zj4129q wm-deco"/><path class="bxjv56brc wm-deco"/><path class="qnftlbnpd wm-k"/><path class="cw36_6mco wm-a"/><path class="jwyvidb5f wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-area-blueprint"} {...others} />);
}

export default Component;
