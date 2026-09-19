import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mluq4equa.css';
import '../../css/z/zx_6j6b3b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="mluq4equa"/><path class="zx_6j6b3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:voicemail"} {...others} />);
}

export default Component;
