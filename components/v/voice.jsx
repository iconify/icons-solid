import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/p0efpsbyt.css';
import '../../css/h/h2x2yzbat.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="p0efpsbyt"/><path class="h2x2yzbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:voice"} {...others} />);
}

export default Component;
