import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/t/t7x346noo.css';
import '../../css/w/wfy2jbs3t.css';
import '../../css/k/ktzpuwbju.css';
import '../../css/h/hiuxldb8l.css';
import '../../css/h/hahlfhbia.css';
import '../../css/k/khxmj7s0m.css';
import '../../css/h/hwkze5_2g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="t7x346noo"/><path clip-rule="evenodd" class="wfy2jbs3t"/><path clip-rule="evenodd" class="ktzpuwbju"/><path class="hiuxldb8l"/><path class="hahlfhbia"/><path class="khxmj7s0m"/><path class="hwkze5_2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:money-atm-pop"} {...others} />);
}

export default Component;
