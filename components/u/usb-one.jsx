import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/ops5gxvvi.css';
import '../../css/b/bj3s_utsy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ops5gxvvi"/><path class="bj3s_utsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:usb-one"} {...others} />);
}

export default Component;
