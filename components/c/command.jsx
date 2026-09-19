import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/l94_8gbje.css';
import '../../css/w/wuekglbtb.css';
import '../../css/a/anfj_ubfx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="l94_8gbje"/><path class="wuekglbtb"/><path class="anfj_ubfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:command"} {...others} />);
}

export default Component;
