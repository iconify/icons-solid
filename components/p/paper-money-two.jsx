import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gwxllit1o.css';
import '../../css/a/a4yzexygo.css';
import '../../css/v/vgxxywbao.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="gwxllit1o"/><path clip-rule="evenodd" class="a4yzexygo"/><path class="vgxxywbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:paper-money-two"} {...others} />);
}

export default Component;
