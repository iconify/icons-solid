import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r_e0x_bru.css';
import '../../css/x/xpuc5vjzo.css';
import '../../css/j/j9hg1or3h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="r_e0x_bru"/><path class="xpuc5vjzo"/><path class="j9hg1or3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:monument-one"} {...others} />);
}

export default Component;
