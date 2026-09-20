import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjw4bwb7l.css';
import '../../css/c/cyccme8ed.css';
import '../../css/p/p98lw798q.css';
import '../../css/d/dupja4c-l.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/j/ja_tpciet.css';
import '../../css/t/txec4eymi.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hjw4bwb7l"/><path class="cyccme8ed"/><circle class="p98lw798q"/><path class="dupja4c-l"/><g class="kdz4acc8r"><circle class="ja_tpciet"/><path class="txec4eymi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-chess-king"} {...others} />);
}

export default Component;
