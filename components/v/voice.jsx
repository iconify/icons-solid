import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/aansyub-h.css';
import '../../css/h/h2x2yzbat.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="aansyub-h"/><path class="h2x2yzbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:voice"} {...others} />);
}

export default Component;
