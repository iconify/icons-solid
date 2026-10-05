import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s08ibwbpf.css';
import '../../css/f/f8omgzl8n.css';
import '../../css/d/drnojd54o.css';
import '../../css/s/s-bt4ab9j.css';
import '../../css/y/ypylkp-2l.css';
import '../../css/x/x3mkrrzda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="s08ibwbpf"/><path class="f8omgzl8n"/><path class="drnojd54o"/><path class="s-bt4ab9j"/><path class="ypylkp-2l"/><path class="x3mkrrzda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bug"} {...others} />);
}

export default Component;
