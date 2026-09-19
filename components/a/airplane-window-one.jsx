import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sfl-a4zyf.css';
import '../../css/v/v5nnxhboa.css';
import '../../css/g/g_ewu02wb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="sfl-a4zyf"/><rect class="v5nnxhboa"/><path class="g_ewu02wb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:airplane-window-one"} {...others} />);
}

export default Component;
