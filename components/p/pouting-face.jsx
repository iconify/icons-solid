import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/y/ylz5tjbiw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="vkcj4bcdm"/><path class="ylz5tjbiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pouting-face"} {...others} />);
}

export default Component;
