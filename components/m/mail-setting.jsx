import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mmi35ubht.css';
import '../../css/t/thp6-bb7p.css';
import '../../css/a/awr5acclq.css';
import '../../css/l/lh0lkc4jp.css';
import '../../css/m/mhbqby5eo.css';
import '../../css/q/qfdkgcncm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="mmi35ubht"/><path class="thp6-bb7p"/><path class="awr5acclq"/><path class="lh0lkc4jp"/><path class="mhbqby5eo"/><path class="qfdkgcncm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mail-setting"} {...others} />);
}

export default Component;
