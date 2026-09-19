import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kq4y83xdm.css';
import '../../css/w/w1wv4tb9z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="kq4y83xdm"/><path class="w1wv4tb9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:notebook"} {...others} />);
}

export default Component;
