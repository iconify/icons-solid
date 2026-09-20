import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/pbptnqb3q.css';
import '../../css/a/ai2o_874w.css';
import '../../css/y/y_gidjb4k.css';
import '../../css/q/qnu7erm6d.css';
import '../../css/s/sfa3bbxvx.css';
import '../../css/s/shb397bbb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="pbptnqb3q"/><path class="ai2o_874w"/><path class="y_gidjb4k"/><path class="qnu7erm6d"/><path class="sfa3bbxvx"/><path class="shb397bbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:telescope"} {...others} />);
}

export default Component;
