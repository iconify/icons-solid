import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nklbjz30x.css';
import '../../css/o/ofo_e0b_q.css';
import '../../css/v/vg9lv4q5z.css';
import '../../css/q/qltwtq2js.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="nklbjz30x"/><path class="ofo_e0b_q"/><path class="vg9lv4q5z"/><path class="qltwtq2js"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:rectangle-flag"} {...others} />);
}

export default Component;
