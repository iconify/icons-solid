import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/s/saadrlbfd.css';
import '../../css/k/krgim9y4j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="saadrlbfd"/><path class="krgim9y4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:display"} {...others} />);
}

export default Component;
