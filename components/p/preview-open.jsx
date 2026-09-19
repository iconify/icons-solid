import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zfnienbkn.css';
import '../../css/v/v3q5wob3k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zfnienbkn"/><path class="v3q5wob3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:preview-open"} {...others} />);
}

export default Component;
