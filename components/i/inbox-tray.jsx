import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw7t2ddpt.css';
import '../../css/t/tpuop0bqq.css';
import '../../css/o/oa4z7jbas.css';
import '../../css/l/lkbnzpjnn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="cw7t2ddpt"/><path class="tpuop0bqq"/><path class="oa4z7jbas"/><path class="lkbnzpjnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:inbox-tray"} {...others} />);
}

export default Component;
