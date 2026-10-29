import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s5lv8gbfq.css';
import '../../css/g/g2knpnl4g.css';
import '../../css/e/ecoxr8ars.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="s5lv8gbfq wm-k"/><path class="g2knpnl4g wm-a"/><path class="ecoxr8ars wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-todo-sketch"} {...others} />);
}

export default Component;
