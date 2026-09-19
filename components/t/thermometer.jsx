import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/e/edow243gp.css';
import '../../css/k/kd_0y5b8q.css';
import '../../css/j/ja135tymf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="edow243gp"/><path class="kd_0y5b8q"/><path class="ja135tymf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:thermometer"} {...others} />);
}

export default Component;
